const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  username: { type: String, required: true, maxLength: 30 },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Author", AuthorSchema);
