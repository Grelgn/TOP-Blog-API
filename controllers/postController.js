const Post = require("../models/post");
const jwt = require("jsonwebtoken");

exports.getAllPosts = async (req, res) => {
	const posts = await Post.find();
	return res.send(posts);
};

exports.publishPost = (req, res) => {
	jwt.verify(req.token, process.env.JWT_KEY, async (err, authData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			const post = new Post({
				title: req.body.title,
				text: req.body.text,
				timestamp: new Date(),
				isPublished: req.body.isPublished,
			});
			await post.save();

			res.json({
				message: `The post has been saved with the ID of ${post._id}`,
			});
		}
	});
};

exports.getPost = async (req, res) => {
	const post = await Post.findById(req.params.postId);
	return res.send(post);
};

exports.updatePost = async (req, res) => {
	jwt.verify(req.token, process.env.JWT_KEY, async (err, authData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			if (req.body.title) {
				await Post.findByIdAndUpdate(req.params.postId, {
					title: req.body.title,
				});
			}

			if (req.body.text) {
				await Post.findByIdAndUpdate(req.params.postId, { text: req.body.text });
			}

			if (req.body.timestamp) {
				await Post.findByIdAndUpdate(req.params.postId, {
					timestamp: req.body.timestamp,
				});
			}

			if (req.body.isPublished) {
				await Post.findByIdAndUpdate(req.params.postId, {
					isPublished: req.body.isPublished,
				});
			}

			res.json({
				message: `The post with the ID of ${req.params.postId} has been updated`,
			});
		}
	});
};

exports.deletePost = async (req, res) => {
	jwt.verify(req.token, process.env.JWT_KEY, async (err, authData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			await Post.findByIdAndDelete(req.params.postId);
			res.json({
				message: `The post with the ID of ${req.params.postId} has been deleted`,
			});
		}
	});
};
