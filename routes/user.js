const express = require("express");
const router = express.Router();
require("../db");
const bodyParser = require("body-parser");
app = require("./app.js");
const mongoose = require("mongoose");
require("../models/product.js");
require("../models/customer.js");
const Product = mongoose.model("Product");
const Customer = mongoose.model("Customer");
//--------------------SearchBox---------------------------
router.get("/products", async (req, res) => {
  try {
    let {
      productName,
      productDescription,
      price,
      category,
      status,
      id
    } = req.query;
    //   const todosObj = await Todos.find({ UserId: req._user._id });
    // console.log();
    /* if (
      productName == null &&
      productDescription == null &&
      price == null &&
      category == null
    ) {
      const product = await Product.find({});
      if (product.length > 0) {
        return res.send(product);
      } else throw error;
    } else {
      if (req.query.productName) {
        const product = await Product.find({ productName: productName });
        if (product.length > 0) {
          return res.send(product);
        } else throw error;
      } else {*/
    Product.find(req.query, (err, doc) => {
      if (doc) {
        return res.send(doc);
      } else {
        return res.send(err);
      }
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
//--------------------------SignUpUser--------------------------
router.post("/signup", async (req, res) => {
  try {
    const customer = new Customer();
    let {
      firstName,
      lastName,
      contactNumber,
      emailAddress,
      password,
      Address,
      Country,
      postalCode,
      City
    } = req.body;
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.contactNumber = contactNumber;
    customer.emailAddress = emailAddress;
    customer.password = password;
    customer.PersonalInfo.Address = Address;
    customer.PersonalInfo.Country = Country;
    customer.PersonalInfo.postalCode = customer.PersonalInfo.postalCode
      ? postalCode
      : 0;
    customer.PersonalInfo.City = City;
    await customer.save();
    return res.json({
      message: "The customer has successfully signedup",
      customer: customer
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
//---------------------GetUser---------------------------------
router.get("/profile/:id", async (req, res) => {
  try {
    const customer = await Customer.findById({ _id: req.params.id });
    if (customer != null) return res.send(customer);
    else
      return res.send({
        message: "Wrong Id"
      });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
//----------------------EditDetails--------------------------
router.put("/profile/edit/:id", async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      contactNumber,
      emailAddress,
      Address,
      Country,
      postalCode,
      City
    } = req.body;
    Customer.findById({ _id: req.params.id }, async (err, doc) => {
      if (err) {
        return res.send(err);
      } else {
        //   console.log(doc);
        doc.firstName = firstName;
        doc.lastName = lastName;
        doc.contactNumber = contactNumber;
        doc.emailAddress = emailAddress;
        doc.password = doc.password;
        doc.PersonalInfo.Address = Address;
        doc.PersonalInfo.Country = Country;
        doc.PersonalInfo.postalCode = doc.PersonalInfo.postalCode
          ? postalCode
          : 0;
        doc.PersonalInfo.City = City;
        await doc.save();
        return res.send(doc);
      }
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});

module.exports = router;
