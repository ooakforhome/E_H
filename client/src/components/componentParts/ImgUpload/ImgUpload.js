import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";

export class ImgUpdate extends Component {
  constructor (props){
    super(props)
        this.state = {
          file: [],
          img: []
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
          images: res.data
        })
      )
      .catch( err => console.log(err));
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
    API.uploadImg(formData)
  }

  render(){
    return(
      <div>
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

      </div>
    )
  }
}
