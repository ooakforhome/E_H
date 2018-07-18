import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
// import CategoriesNav from '../../componentParts/Nav/CategoriesNav';
import '../../componentParts/Nav/nav.css'
import {Prender} from '../../componentParts/PageList/Plist';
import "./allproduct.css";

//SPD to AllProductPage
class AllProductPage extends Component {
  constructor(props){
    super(props)
    this.clickthenav = this.clickthenav.bind(this);
  }

//mount Redux data info.
  componentWillMount() {
    this.props.fetchProducts();
  }

  clickthenav = (e) => {
    e.preventDefault();
    const theName = e.target.id.split(' ').join('_');
    console.log(theName)
    window.location = '/allproductpage/'+theName;
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
    const navLists = ["Accent Furniture", "Book Case", "Bathroom Furniture", "Bath Accessories", "Hooks And Rods", "Bath Hardware", "Over The Door", "Window Hardware", "Window Panels", "Shower Curtain", "Beauty Device", "Garden Barrels", "Outdoor Lighting", "Pet Products"];

    const listMaps = navLists.map((navList) => <ul key={navList}><li id={navList} onClick={this.clickthenav} className="navlist" name={navList}>{navList}</li></ul>);

    return(
      <div>
        <nav className='cat-nav'>{listMaps}</nav>
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
