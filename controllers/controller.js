const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/Products_model');

//router
router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);

module.exports = router;
