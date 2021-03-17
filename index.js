require("dotenv").config();
const connectDB = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes imports
const UserRouter = require("./routes/UserRouter");

// routes configuration
app.use("/user", UserRouter);

connectDB();
app.get("/", (req, res) => {
  res.send("Hello testing heroku app");
});
app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT - ${PORT}`);
});
