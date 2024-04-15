const express = require("express");
const router = express.Router();

// Require controller modules
const authorController = require("../controllers/authorController");

// Author
router.get("/", authorController.loginForm);
router.post("/", authorController.logIn);

module.exports = router;

