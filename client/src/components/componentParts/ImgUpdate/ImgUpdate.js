import React, { Component } from "react";

import "./style.css";

export class ImgUpdate extends Component {
  render(){
    return(
      <div>
        <form
            encType="multipart/form-data"
            onSubmit={this.props._handleSubmit} >
          <input
            className="fileInput inlineBlk"
            type="file"
            name= "file"
            id="file"
            onChange={this.props._handleImageChange} />
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
