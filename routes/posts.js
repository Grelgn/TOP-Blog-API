const express = require("express");
const router = express.Router();

// Require controller modules
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

function verifyToken(req, res, next) {
	const bearerHeader = req.headers["authorization"];
	if (typeof bearerHeader !== "undefined") {
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}

// Post
router.get("/", postController.getAllPosts);
router.post("/", verifyToken, postController.publishPost);
router.get("/:postId", postController.getPost);
router.patch("/:postId", verifyToken, postController.updatePost);
router.delete("/:postId", verifyToken, postController.deletePost);

// Comment
router.get("/:postId/comments", commentController.getComments);
router.post("/:postId/comments", commentController.postComment);
router.delete(
	"/:postId/comments/:commentId",
	verifyToken,
	commentController.deleteComment
);

module.exports = router;
