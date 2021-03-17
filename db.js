const mongoose = require("mongoose");
const DB = process.env.mongo_uri;

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO DB");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
