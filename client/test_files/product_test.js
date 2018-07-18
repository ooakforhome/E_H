const mocha = require('mocha');


beforeEach((done) => {
  description('testing mongo post', () => {
    it('insert user', () => {
      assert( 1 + 1 === 2);
      done();
    })
  })
})
