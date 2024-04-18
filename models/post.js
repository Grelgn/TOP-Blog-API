const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, maxLength: 60 },
  text: { type: String, required: true, maxLength: 25000 },
  timestamp: { type: Date, required: true },
  isPublished: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", PostSchema);
