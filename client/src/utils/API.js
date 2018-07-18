import axios from "axios";

export default {
  //server multer
  uploadImg: function(file){
    return axios.post('/api/uploads/', file);
  },
  getLastImg: function(){
    return axios.get('/api/fileid')
  },
  // end server multer
  loadimg: function(filename){
    return axios.get('/api/image/'+ filename)
  },
  addUpload: function(photo) {
    return axios.post('/api/uploadImg/', photo);
  },
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  addProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  updateProduct: function(id, productData){
    return axios.put(`/api/products/${id}`, productData);
  }
};
