const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const admin = require("./admin.js");
const user = require("./user.js");
app.use("/manage", admin);
app.use("/user", user);
app.listen(3000, err => {
  if (!err) console.log("Server Is running at Local Host : 3000");
  else console.log(err);
});
app.get("/", (req, res) => {
  res.send("WELCOME TO E-commerce site");
});
module.exports = app;
