import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
import CategoriesNav from '../../componentParts/Nav/CategoriesNav';
import {Prender} from '../../componentParts/PageList/Plist';
import "./allproduct.css";

//SPD to AllProductPage
class AllProductPage extends Component {
  constructor(props){
    super(props)
    this.handleClickthenav = this.handleClickthenav.bind(this);
  }

//mount Redux data info.
  componentWillMount() {
    this.props.fetchProducts();
  }

  handleClickthenav = (e) => {
    e.preventDefault();
    const theName = e.target.id.split(' ').join('_');
    console.log(theName)
    window.location = '/'+theName;
  }
// Body of visual part
  render() {
    const Plist = ({products}) => (
      <div>
        {products.map((product, i) =>
          <Prender  key={i}
                  {...product}/>
        )}
      </div>
    )
    return(
      <div>
        <CategoriesNav clickthenav = {this.handleClickthenav} />
        <h1>Products - {this.props.match.params.category_type}</h1>
        <Plist products = {this.props.posts}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchProducts })(AllProductPage);
