const Comment = require("../models/comment");
const jwt = require("jsonwebtoken");

exports.getComments = async (req, res) => {
	const comments = await Comment.find({ post: req.params.postId });
	res.json(comments);
};

exports.postComment = async (req, res) => {
	if (req.body.username && req.body.text) {
		const comment = new Comment({
			username: req.body.username,
			text: req.body.text,
			timestamp: new Date(),
			post: req.params.postId,
		});
		await comment.save();

		res.json({ message: `The comment has been saved with the ID of ${comment._id}` });
	} else {
		res.sendStatus(406);
	}
};

exports.deleteComment = async (req, res) => {
	jwt.verify(req.token, process.env.JWT_KEY, async (err, authData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			await Comment.findByIdAndDelete(req.params.commentId);
			res.json({
				message: `The comment with the ID of ${req.params.commentId} has been deleted`,
			});
		}
	});
};
