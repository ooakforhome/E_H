import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchimgs } from '../../../actions/productsActions'

class AllImgs extends Component {
  componentWillMount(){
    this.props.fetchimgs();
  }

  render(){
    const allImgs = this.props.imgposts.map(imgpost => (
      <div>
        <p key={imgpost._id} alt={imgpost._id}>
        {imgpost.name}
        </p>
      </div>
    ));
    return(
      <div>
        {allImgs}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  imgposts: state.imgposts.images
});

export default connect(mapStateToProps, { fetchimgs })(AllImgs);
