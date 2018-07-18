import React, { Component } from 'react';
import CategoriesNav from '../../componentParts/Nav/CategoriesNav';
import { fetchAccent } from '../../../actions/categoriesActions';
import { Prender } from '../../componentParts/PageList/Plist';
import { connect } from 'react-redux';

export class AccentFurniture extends Component {
  constructor(props){
    super(props)
    this.handleClickthenav = this.handleClickthenav.bind(this);
  }

  componentWillMount() {
    this.props.fetchAccent();
  }

  handleClickthenav = (e) => {
    e.preventDefault();
    const theName = e.target.id.split(' ').join('_');
    console.log(theName)
    window.location = '/allproductpage/'+theName;
}

  render(){
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
        <h1>Products - </h1>
        <Plist products = {this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.accents.items
});

export default connect(mapStateToProps, { fetchAccent })(AccentFurniture);
