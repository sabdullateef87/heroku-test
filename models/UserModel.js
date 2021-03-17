const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
  },
  avatar: {
    default: "",
    type: String,
  },
  role: {
    default: 0,
    type: Number,
  },
  task: [],
});

module.exports = mongoose.model("Users", userSchema);
