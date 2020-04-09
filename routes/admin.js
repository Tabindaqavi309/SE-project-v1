const express = require("express");
const router = express.Router();
require("../db");
const bodyParser = require("body-parser");
app = require("./app.js");
const mongoose = require("mongoose");
require("../models/product.js");
require("../models/category.js");
require("../models/coupon.js");
require("../models/customer.js");

const Product = mongoose.model("Product");
const Category = mongoose.model("Category");
const Coupon = mongoose.model("Coupon");
const Customer = mongoose.model("Customer");
//--------------------ProductManagement---------------------------------------
router.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    return res.send(product);
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.post("/products/add", async (req, res) => {
  const product = new Product();
  try {
    let {
      productName,
      productDescription,
      price,
      category,
      picture
    } = req.body;
    product.productName = productName;
    product.productDescription = productDescription;
    product.price = price;
    product.category = category;
    product.picture = picture;
    await product.save();
    return res.json({
      message: "The product is successfully added",
      product: product
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) return res.send(product);
    else {
      return res.status(400).send({
        Status: "Error Caught!!",
        message: "The Id that you've entered is incorrect!! ",
        Error: error
      });
    }
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.delete("/products/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    if (product != null)
      res.json({
        message: "deleted successfully",
        item: product
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The Id that you've entered is incorrect!! ",
      Error: error
    });
  }
});
router.put("/products/update/:id", async (req, res) => {
  try {
    let {
      productName,
      productDescription,
      price,
      category,
      picture
    } = req.body;
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (product != null)
      return res.json({
        message: "The product is successfully updated",
        product: product
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: error
    });
  }
});
//----------------Categories------------------------------
router.get("/category", async (req, res) => {
  try {
    const category = await Category.find({});
    return res.send(category);
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});

router.post("/category/add", async (req, res) => {
  const category = new Category();
  try {
    let { categoryName, brandName, picture } = req.body;
    category.categoryName = categoryName;
    category.brandName = brandName;
    category.picture = picture;
    await category.save();
    return res.json({
      message: "The category is successfully added",
      category: category
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.get("/category/:id", async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    if (category) return res.send(category);
    else {
      return res.status(400).send({
        Status: "Error Caught!!",
        message: "The Id that you've entered is incorrect!! ",
        Error: error
      });
    }
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.delete("/category/delete/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete({ _id: req.params.id });
    if (category != null)
      res.json({
        message: "deleted successfully",
        item: category
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The Id that you've entered is incorrect!! ",
      Error: error
    });
  }
});
router.put("/category/update/:id", async (req, res) => {
  const category = new Category();
  try {
    let { categoryName, brandName, picture } = req.body;
    const category = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (category != null)
      return res.json({
        message: "The product is successfully updated",
        category: category
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: error
    });
  }
});
//------------------------CouponManagement------------------------------------------
router.get("/coupon", async (req, res) => {
  try {
    const coupon = await Coupon.find({});
    return res.send(coupon);
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});

router.post("/coupon/add", async (req, res) => {
  const coupon = new Coupon();
  try {
    let {
      couponName,
      couponType,
      value,
      billAmount,
      product,
      status
    } = req.body;
    coupon.couponName = couponName;
    coupon.couponType = couponType;
    coupon.value = value;
    coupon.billAmount = billAmount;
    coupon.product = product;
    coupon.status = status;
    await coupon.save();
    return res.json({
      message: "The coupon is successfully added",
      coupon: coupon
    });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.get("/coupon/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ _id: req.params.id });
    if (coupon) return res.send(coupon);
    else {
      return res.status(400).send({
        Status: "Error Caught!!",
        message: "The Id that you've entered is incorrect!! ",
        Error: error
      });
    }
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
router.delete("/coupon/delete/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete({ _id: req.params.id });
    if (coupon != null)
      res.json({
        message: "deleted successfully",
        item: coupon
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The Id that you've entered is incorrect!! ",
      Error: error
    });
  }
});
router.put("/coupon/update/:id", async (req, res) => {
  const coupon = new Coupon();
  try {
    let {
      couponName,
      couponType,
      value,
      billAmount,
      product,
      status
    } = req.body;
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (coupon != null)
      return res.json({
        message: "The product is successfully updated",
        coupon: coupon
      });
    else throw error;
  } catch (error) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: error
    });
  }
});
//---------------------GetUsers---------------------------------------------
router.get("/users", async (req, res) => {
  try {
    const customer = await Customer.find({});
    if (customer != null) return res.send(customer);
    else
      return res.send({
        message: "No user Found"
      });
  } catch (err) {
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
//----------------------Delete Users-------------------------------------------
router.delete("/users/delete/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete({ _id: req.params.id });
    if (customer != null)
      return res.send({
        message: "Successfully Deleted",
        data: customer
      });
    else
      return res.send({
        message: "No user Found/Wrong Id"
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
