const assert = require('assert');
const Product = require('../models/newSchema/product_modules/product');

describe('read data info with beforeEach data', () => {
  let product;

  beforeEach((done)=> {
    product = new Product({name: "cabinet", sku: "sku6229"});
      product.save()
        .then(()=>done());
  })

  it('find ALL', (done)=>{
    Product.find({})
      .then((res) => {
        assert(res[0].name.toString() === product.name.toString())
        done();
      })
  })
})
