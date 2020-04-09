const mongoose = require("mongoose");
const dbname = "ecommerce";
//require("dotenv").config();
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://Tabinda:tabinda@myecom-vnbu7.mongodb.net/test",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("connected to db");
});
