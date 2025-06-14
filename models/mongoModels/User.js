const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UID: String,
  name: String,
  surname: String,
  email: String,
  role: String,
  password: String,
  contact: {
    form: String
  },
  registrations: [
    {
      course: {
        CID: Number,
        title: String,
        description: String,
        duration: String,
        category: {
          CategoryID: Number
        }
      },
      registrationDate: Date
    }
  ]
});

module.exports = mongoose.model("User", userSchema);

