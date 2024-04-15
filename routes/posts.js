const express = require("express");
const router = express.Router();

// Require controller modules
const postController = require("../controllers/postController");

// Post
router.get("/", postController.getAllPosts);
router.post("/", postController.publishPost);
router.get("/:postId", postController.getPost);
router.patch("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

module.exports = router;
