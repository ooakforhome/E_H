import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage'
import  AllProductPage  from './components/pages/AllProductPage/AllProductPage'
import  NewProductForm  from './components/pages/NewProductForm/NewProductForm'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { HomePage } />
        <Route exact path="/allproductpage" component = { AllProductPage } />
        <Route exact path="/newproductform" component = { NewProductForm } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
      </Switch>
    </div>
  </Router>;

export default App;
