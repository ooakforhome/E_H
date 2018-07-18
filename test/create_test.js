const assert = require('assert');
const Product = require('../models/newSchema/product_modules/product');

describe('CREATE TESTING NEW PRODUCT', () => {
  it('Product Module Testing', (done) => {
    const cabinet = new Product({
      name: "new cabinet",
      sku: "sku6229",
      upc: "upc6229",
      color: "espresso",
      product_size: {
        product_length: 23,
        product_width: 24,
        product_height: 25
      },
      cartons: {
        carton1: {
          package_length: 1,
          pakcage_width: 2,
          pakcage_height: 3,
          package_weight: 4},
        carton2: {
          package_length: 5,
          pakcage_width: 6,
          pakcage_height: 7,
          package_weight: 8}
    },
      materials: {material: "MDF"},
      features: {feature1: "furniture", feature2: "cabinet"},
      price: {retail: 50, wholesale: 108}
    });

    cabinet.save()
      .then(()=>{
        assert(!cabinet.isNew);
        done();
      });
  });
});
