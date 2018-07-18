import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchOne } from '../../../actions/productsActions';
import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
import { UploadImg } from '../UploadImgs/UploadImgs';
import API from '../../../utils/API';
import './detail.css'

class ProductDetail extends Component {
  constructor(props){
    super(props)
        this.state = {
        product: [],
        file:[]
      }
 }

 componentWillMount() {
   this.props.fetchOne(this.props.match.params.id);
 }

 componentDidMount =()=> {
   this.props.fetchOne(this.props.match.params.id);
 }

  onChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitEdit = (e) => {
    e.preventDefault()
    API.updateProduct(this.props.match.params.id, {
      name: this.state.name,
      images: this.state.images,
      color: this.state.color,
      pkg_width: this.state.pkg_width,
      pkg_height: this.state.pkg_height,
      pkg_depth: this.state.pkg_depth,
      actual_width: this.state.actual_width,
      actual_height: this.state.actual_height,
      actual_depth: this.state.actual_depth
    })
      .then(res => window.location.reload())
  }


  render(){
      const { post } = this.props;
    return (
      <div className="detailPage">
        <div className="item_container" style={{visibility: 'visible'}}>
          <div className="backNav">
              <Link to="/allproductpage">
                <button className="backButton">BACK TO PRODUCTS PAGE</button>
              </Link>
          </div>
           <hr />
          <div className="product_box">
            <div className="item_img">
              <img className="tImg"
                 alt={post._id}
                 src={"http://localhost:3001/api/image/"+post.images}
              />
            </div>
            <div>
              <p>Category: {post.category_type}</p>
            </div>
            <div className="item_info_box">
             <p className="item_name">Product Name: {post.name}</p>
             <p>SKU: {post.sku}</p>
             <p>Materials: {post.materials}</p>
             <p className="item_color"> Color: {post.color}</p>
             <p className="item_size"> Package Dimensions: {post.pkg_width}W x {post.pkg_height}H x {post.pkg_depth}D </p>
             <p className="item_size"> Actural Dimensions: {post.actual_width}W x {post.actual_height}H x {post.actual_depth}D </p>
            </div>
          </div>
        </div>

        <div className="updateBlock">
          <UpdateParts
           submitEdit = {this.submitEdit}
           onChanges = {this.onChanges}
           />
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    post: state.posts.item
  });

export default connect(mapStateToProps, { fetchOne } ) (ProductDetail);
