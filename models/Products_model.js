const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var productSchema = new Schema({
    category_type : {type: String },
    images:{type: String},
    name: {type: String },
    sku: {type: String},
    materials : {type: String },
    color : {type: String },
    shipping_weight : {type: Number },
    product_weight : {type: Number },
    Warranty : {type: String },
    assembly_required : {type: String },
    care_instructions : {type: String },
    pkg_width : {type: Number },
    pkg_height : {type: Number },
    pkg_depth : {type: Number },
    actual_width : {type: Number },
    actual_height : {type: Number },
    actual_depth : {type: Number },
    product_description: {type: String}
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
