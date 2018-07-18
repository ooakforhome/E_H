import React, { Component}  from 'react';
import API from '../../../utils/API';
import { Link } from 'react-router-dom'
import './hP.css';


export class HomePage extends Component {
	constructor(props) {
    super(props);
		this.state = {
			email: "LOGIN E-MAIL",
			password: "PASSWORD"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange = e => {
			e.preventDefault();
			this.setState({
				[e.target.name]: e.target.value
			})
	}

	handleSubmit = event => {
    event.preventDefault();
		API.saveUser({
			email: this.state.email,
			password: this.state.password
		})
			.then(res => window.location('/products'))
			.catch(err => console.log(err));
  }

	render(){
  	return(
			<div className='fp_container'>
				<div className='login_block'>
				  <form className='fp_form'  onSubmit={this.handleSubmit}>
						<p className='fp_title'>ELEGANT HOME FASHIONS</p>
				    <input id='email'
										className='fp_input'
										type='text'
										name='email'
										value = {this.state.email}
										onChange = {this.handleInputChange}
										placeholder='email' />

						<input id='password'
										className='fp_input'
										type='text'
										name='password'
										value = {this.state.password}
										onChange = {this.handleInputChange}
										placeholder='password' />
						<input className='fp_submit' type="submit" value="Submit" />
				  </form>
					<Link to="/AllProductPage">
						<button>All Products</button>
					</Link>
					<Link to="/uploadimg">
						<button>Add Product</button>
					</Link>
				</div>
			</div>
		)
	}
}
