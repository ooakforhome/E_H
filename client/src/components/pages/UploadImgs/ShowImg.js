import React, { Component } from 'react';
import API from '../../../utils/API'

export class ShowImg extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: ''
    }
  }

  componentDidMount(){
    this.setState({img:["update"]})
  }

  componentDidUpdate(){
    this.loadImg();
  }

  loadImg = () => {
    API.getLastImg()
      .then( res => {
        this.setState({
          img: res.data[0].filename
        })
      }
    )
    .catch( err => console.log(err))
  }

  render(){
    return(
      <div>
        <img className="img_size" alt="test" src={"http://localhost:3001/api/image/"+this.state.img} />
      </div>
    )
  }
}
