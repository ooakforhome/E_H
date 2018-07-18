const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const Product = require('../models/Products_model');
const AccentFurniture = require('../models/Accent_Furniture_model');

//router
// router.route("/api/accentFurniture")
//     .get(AccentFurniture.getAccent)
//     .post(AccentFurniture.addAccent);
//
// router.route("/api/accentFurniture/:_id")
//     .get(AccentFurniture.getAccentById)
//     .put(AccentFurniture.updateAccent)
//     .delete(AccentFurniture.deleteAccent);

router.route("/api/products")
    .get(Product.getProducts)
    .post(Product.addProduct);

router.route("/api/products/:_id")
    .get(Product.getProductsById)
    .put(Product.updateProduct)
    .delete(Product.deleteProduct);

router.route("/api/product/accentfurniture")
    .get(Product.findCategory);

module.exports = router;

// //=========example================================
// router.route("/api/accentFurniture")
//     .post(function(req, res) {
//       User.create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     });
