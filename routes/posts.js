const express = require("express");
const router = express.Router();

// Require controller modules
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

// Post
router.get("/", postController.getAllPosts);
router.post("/", postController.publishPost);
router.get("/:postId", postController.getPost);
router.patch("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

// Comment
router.get("/:postId/comments", commentController.getComments);
router.post("/:postId/comments", commentController.postComment);
router.delete("/:postId/comments/:commentId", commentController.deleteComment);

module.exports = router;
