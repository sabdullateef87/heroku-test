const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
app.get("/", (req, res) => {
  res.send("Hello testing heroku app");
});
app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT - ${PORT}`);
});
