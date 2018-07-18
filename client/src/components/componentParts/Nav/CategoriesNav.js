import React, { Component } from 'react';
import './nav.css'


class CategoriesNav extends Component {

  render(){
    const navLists = ["Accent Furniture", "Book Case", "Bathroom Furniture", "Bath Accessories", "Hooks And Rods", "Bath Hardware", "Over The Door", "Window Hardware", "Window Panels", "Shower Curtain", "Beauty Device", "Garden Barrels", "Outdoor Lighting", "Pet Products"];

    const listMaps = navLists.map((navList) => <ul key={navList}><li id={navList} onClick={this.props.clickthenav} className="navlist" name={navList}>{navList}</li></ul>);


    return(
      <nav className='cat-nav'>
        {listMaps}
      </nav>
    );
  }
}

export default CategoriesNav;
