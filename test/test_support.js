const mongoose = require('mongoose');

//whenever using promises, use ES6
mongoose.Promise = global.Promise;

//before only executed one time.
before((done)=>{
  mongoose.connect('mongodb://localhost/admin');
  mongoose.connection
    .once('open', ()=> {done();})
    .on('error', (error) => {
      console.warn("Warning", error);
    });
});


beforeEach((done)=>{
  const { products} = mongoose.connection.collections;
  products.drop(() => {
    done();
  })
});
