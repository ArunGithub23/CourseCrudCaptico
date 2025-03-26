const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
});

module.exports = mongoose.model("Course", courseSchema);
