import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
import CategoriesNav from '../../componentParts/Nav/CategoriesNav';
import {Plist} from '../../componentParts/PageList/Plist';
import "./allproduct.css";

//SPD to AllProductPage
class AllProductPage extends Component {
  constructor(props){
    super(props)
    this.handleClickthenav = this.handleClickthenav.bind(this);
    this.onClick = this.onClick.bind(this);
  }

//mount Redux data info.
  componentWillMount() {
    this.props.fetchProducts();
  }

  onClick=(e)=>{
    e.preventDefault();
      console.log('click it');
      window.location ='/productdetail/'+ e.target.id
    }

  handleClickthenav = (e) => {
    e.preventDefault();
    const theName = e.target.id.split(' ').join('_');
    console.log(theName)
    window.location = '/'+theName;
  }
// Body of visual part
  render() {
    return(
      <div>
        <CategoriesNav clickthenav = {this.handleClickthenav} />
        <h1>Products - {this.props.match.params.category_type}</h1>
        <Plist products = {this.props.posts}
                onClick = {this.onClick}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchProducts })(AllProductPage);

//----------
