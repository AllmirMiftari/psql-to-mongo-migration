const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  CID: String,
  title: String,
  description: String,
  duration: String,
  category: {
    CategoryID: String,
    name: String
  }
});

module.exports = mongoose.model("Course", courseSchema);
