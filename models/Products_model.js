const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var FileSchema = new Schema({}, { strict: false, collection: 'uploads.files' });

//----database model-----
var productSchema = new Schema({
    category_type : {type: String },
    images:{type: String},
    name: {type: String },
    sku: {type: String},
    shipping_weight : {type: Number },
    product_weight : {type: Number },
    color : {type: String },
    cartons : {type: String },
    pkg_width : {type: Number },
    pkg_height : {type: Number },
    pkg_depth : {type: Number },
    actual_width : {type: Number },
    actual_height : {type: Number },
    actual_depth : {type: Number },
    materials : {type: String },
    care_instructions : {type: String },
    assembly_required : {type: String },
    Warranty : {type: String },
    detail_measurement : {type: String },
    product_description: {type: String},
    features : {type: String },
    shelf_length : {type: Number },
    shelf_width : {type: Number },
    inches_btw_shelf : {type: Number },
    drawer_length : {type: Number },
    drawer_width : {type: Number },
    drawer_height : {type: Number },
    shelf_weight_capacity : {type: String },
    solar_panel : {type: String },
    led_color : {type: String },
    led : {type: String },
    uv : {type: String },
    battery_included : {type: String },
    battery_type : {type: String },
    capacity : {type: String }
})

const Product = module.exports = mongoose.model ('Product', productSchema);

module.exports = {
        getProducts: function(req, res) {
          Product
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addProduct: function(req, res) {
          Product
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getProductsById: function(req, res) {
          Product
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateProduct: function(req, res) {
          Product
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteProduct: function(req, res) {
          Product
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        findCategory: function(req, res) {
          Product
            .find({category_type: "Accent Furniture"})
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
        }
};
