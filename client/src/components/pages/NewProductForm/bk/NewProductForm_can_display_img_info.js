import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/productsActions';
import { Field, reduxForm } from "redux-form";
// import { ImgUpload } from '../../componentParts/ImgUpload/ImgUpload';
import API from "../../../utils/API";
// import { Link } from "react-router-dom";
import './newProductForm.css';

//Change SpdForm to NewProductForm
class NewProductForm extends Component {

  constructor (props){
    super(props)
        this.state = {
          imgId: []
        }
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
  }
 
  componentDidMount(){
    this.setState({imgId:["update"]})
  }

  componentDidUpdate(){
    this.loadImg();
  }

  loadImg = () => {
    API.getLastImg()
      .then( res =>
        this.setState({
          imgId: res.data
        })
      )
      .catch( err => console.log(err));
  }

  renderField(field) {
    return(
      <div className={field.className}>
        <p>{field.label}</p>
        <input className="form-control" type="text"
          {...field.input} />
      </div>
    );
  }

  _handleImageChange(e) {
    e.preventDefault();
      this.setState({
        file: e.target.files[0]
      });
  }



  _handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('file', this.state.file);
    // console.log(this.state.file);
    API.uploadImg(formData)
    e.target.reset()
    this.loadImg();
  }

  onSubmit(values) {
    values.images = this.state.imgId[0].filename;
    console.log(values)
    API.addProduct(values)
      .then(()=> window.location = '/allproductpage')
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <div className="spdFormContainer">
        <div className="spdFormInnerContainer">
        <h1>ADD PRODUCT</h1>
        <form
            encType="multipart/form-data"
            onSubmit={this._handleSubmit} >
          <input
            className="fileInput inlineBlk"
            type="file"
            name= "file"
            id="file"
            onChange={this._handleImageChange} />
           <button
             className="saveBtn inlineBlk"
             type="submit">
                save
           </button>
        </form>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <p>Category Type</p>
            <Field name="category_type" component="select" className="input_box">
                <option />
                  <option value="Accent Furniture">Accent Furniture</option>
                  <option value="Book Case">Book Case</option>
                  <option value="Bathroom Furniture">Bathroom Furniture</option>
                  <option value="Bath Accessories">Bath Accessories</option>
                  <option value="Hooks And Rods">Hooks And Rods</option>
                  <option value="Bath Hardware">Bath Hardware</option>
                  <option value="Over The">Over The</option>
                  <option value="Window Hardware">Window Hardware</option>
                  <option value="Window Panels">Window Panels</option>
                  <option value="Shower Curtain">Shower Curtain</option>
                  <option value="Beauty Device">Beauty Device</option>
                  <option value="Garden Barrels">Garden Barrels</option>
                  <option value="Outdoor Lighting">Outdoor Lighting</option>
                  <option value="Pet Products">Pet Products</option>
            </Field>
          </div>
          <Field
            label="name"
            name="name"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="sku"
            name="sku"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="materials"
            name="materials"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="color"
            name="color"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="ship-weight"
            name="shipping_weight"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="product_weight"
            name="product_weight"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="cartons"
            name="cartons"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="Warranty"
            name="Warranty"
            className="input_box_small"
            component={this.renderField}
          />
          <div className="input_box">
              <label>"Assembly Requir?"</label>
              <div>
                <label className="form_radio">
                  <Field
                    name="assembly_required"
                    component="input"
                    type="radio"
                    value="YES"
                  />{' '}
                  YES
                </label>
                <label className="form_radio">
                  <Field
                    name="assembly_required"
                    component="input"
                    type="radio"
                    value="NO"
                  />{' '}
                  NO
                </label>
              </div>
          </div>
          <Field
            label="care_instructions"
            name="care_instructions"
            className="input_box"
            component={this.renderField}
          />

          <Field
            label="detail_measurement"
            name="detail_measurement"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="features"
            className="input_box"
            component={this.renderField}
          />

          <div className="size_box">
              <Field
                label="pkg_width"
                name="pkg_width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="pkg_height"
                name="pkg_height"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="pkg_depth"
                name="pkg_depth"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div className="size_box">
              <Field
                label="actual_width"
                name="actual_width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="actual_height"
                name="actual_height"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="actual_depth"
                name="actual_depth"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div className="size_box">
              <Field
                label="shelf_length"
                name="shelf_length"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="shelf_width"
                name="shelf_width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="inches_btw_shelf"
                name="inches_btw_shelf"
                className="input_box_small"
                component={this.renderField}
              />
          </div>

          <div className="size_box">
              <Field
                label="drawer_length"
                name="drawer_length"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="drawer_width"
                name="drawer_width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="drawer_height"
                name="drawer_height"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div>
            <Field
              label="product description"
              name="product_description"
              className="input_box_max"
              component={this.renderField}
            />
          </div>
          <hr className="formHR" />
          <div className="other_box">
              <Field
                label="shelf_weight_capacity"
                name="shelf_weight_capacity"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="solar_panel"
                name="solar_panel"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="led_color"
                name="led_color"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="led"
                name="led"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="uv"
                name="uv"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="battery_included"
                name="battery_included"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="battery_type"
                name="battery_type"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="capacity"
                name="capacity"
                className="input_box"
                component={this.renderField}
              />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.category_type) {
    errors.category_type = "What is the category type?";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: "PostsNewProduct"
})(connect(null, { createPost })(NewProductForm));
