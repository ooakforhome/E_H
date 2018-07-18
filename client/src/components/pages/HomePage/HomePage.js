import React, { Component}  from 'react';
import API from '../../../utils/API';
import { Link } from 'react-router-dom'
import './hP.css';


export class HomePage extends Component {

	render(){
  	return(
			<div className='fp_container'>
				<div className='login_block'>
					<Link to="/newproductform">
						<button>Add Product</button>
					</Link>
					<Link to="/AllProductPage">
						<button>All Products</button>
					</Link>
				</div>
			</div>
		)
	}
}
