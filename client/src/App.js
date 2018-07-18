import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage'
import  AllProductPage  from './components/pages/AllProductPage/AllProductPage'
import  NewProductForm  from './components/pages/NewProductForm/NewProductForm'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import AllImgs from './components/pages/AllImgs/AllImgs'
import { UploadImg } from './components/pages/UploadImgs/UploadImgs'
import { AccentFurniture } from './components/pages/Categories/AccentFurniture'
//Accent Furniture

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { HomePage } />
        <Route exact path="/allproductpage" component = { AllProductPage } />
          <Route exact path="/allproductpage/Accent_Furniture" component = { AccentFurniture } />
        <Route exact path="/newproductform" component = { NewProductForm } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
        <Route exact path="/allimgs" component = { AllImgs } />
        <Route exact path="/uploadimg" component = { UploadImg } />
      </Switch>
    </div>
  </Router>;

export default App;

// getProduct: function(id) {
//   return axios.get("/api/products/" + id);
// },
