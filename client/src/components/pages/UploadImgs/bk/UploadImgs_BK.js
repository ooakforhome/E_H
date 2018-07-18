import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";

export class UploadImg extends Component {
  constructor (props){
    super(props)
        this.state = {
          file: ''
        }
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
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
    console.log(formData);
    // e.target.reset()
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
