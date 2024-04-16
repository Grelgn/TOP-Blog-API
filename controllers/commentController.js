const Comment = require("../models/comment");

exports.getComments = async (req, res) => {
	const comments = await Comment.find({ post: req.params.postId });
	return res.send(comments);
};

exports.postComment = async (req, res) => {
	const comment = new Comment({
		username: req.body.username,
		text: req.body.text,
		timestamp: new Date(),
		post: req.params.postId,
	});
	await comment.save();

	return res.send(`The comment has been saved with the ID of ${comment._id}`);
};

exports.deleteComment = async (req, res) => {
	await Comment.findByIdAndDelete(req.params.commentId);
	return res.send(
		`The comment with the ID of ${req.params.commentId} has been deleted`
	);
};
