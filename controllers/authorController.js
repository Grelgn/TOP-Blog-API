const Author = require("../models/author");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.new = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const author = new Author({
    username: req.body.username,
    password: hashedPassword,
  });
  await author.save();

  res.json({ message: `The author named ${req.body.username} has been saved` });
};

exports.logIn = async (req, res) => {
  const author = await Author.findOne({ username: req.body.username });
  const match = await bcrypt.compare(req.body.password, author.password);

  if (!match) {
    res.sendStatus(401);
  } else {
    jwt.sign(
      { user: author },
      process.env.JWT_KEY,
      { expiresIn: "8h" },
      (err, token) => {
        res.json({
          token,
        });
      },
    );
  }
};
