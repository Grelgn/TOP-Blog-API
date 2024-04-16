const express = require("express");
const router = express.Router();

// Require controller modules
const authorController = require("../controllers/authorController");

// Author
router.post("/new", authorController.new);
router.post("/login", authorController.logIn);

module.exports = router;

