const assert = require('assert');
const Product = require('../models/newSchema/product_modules/product');

describe('This is the UPDATE testing file', ()=>{
  let product;

  beforeEach((done)=> {
    product = new Product({name: "cabinet", sku: "sku6229", "features.feature1": "blue stuff", "features.feature2": "yellow stuff", "price.retail": 20});
      product.save()
        .then(()=>done());
  })

  function assertName(operation, done){
    operation
    .then(() =>  Product.find({}))
      .then((product) => {
        assert(product.length === 1);
        assert(product[0].name === 'shelf');
        done();
      });
  }


    it('find cabinet and update it\'s name', (done)=>{
      assertName(
      Product.findOneAndUpdate({name:"cabinet"}, {name: "shelf"}),
      done
    );
  })

  it('find cabinet and update 2nd test', (done)=>{
    Product.findOneAndUpdate({name:"cabinet", "features.feature1": "blue stuff"}, {name: "door", "features.feature1": "red stuff"})
      .then(() => Product.find({}))
        .then((res)=>{
          console.log(res);
          assert(res.length === 1);
          assert(res[0].name === 'door');
          done();
        })
  })

});
