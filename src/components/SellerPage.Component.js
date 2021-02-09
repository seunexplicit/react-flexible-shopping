import React from 'react'; 
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default class SellerPage extends React.component{

	constructor(props){
		super(props);
		this.state = {};
	}

	ComponentWillMount(){
		let sellerId  = this.props.match.params.sellerId;
		axios.get('/seller/'+sellerId).then(
			(response)=>{
				this.setState({
					...response.data
				})
			},
			(error)=>{
				console.log(err);
			})
	}

	render(){
		return(
			<main>
				<TopHeaderComponent></TopHeaderComponent>
				<section>
					<Router>
						<aside>
							<SellerSideBar></SellerSideBar>
						</aside>
						<aside>
							<Switch>
								<Route path={`${match.url}/`}>
									<SellerProduct products={}></SellerProduct>
								</Route>
								<Route path={`${match.url}/order`}>
									<SellerOrder></SellerOrder>
								</Route>
							</Switch>
						</aside>
					</Router>
				</section>
			</main>
			)
	}
}


function SellerSideBar(){
	return(
		<div>
			<ul>
				<li>
					<Link to={`${match.url}/`}>My Product</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={`${match.url}/order`}>My Order</Link>
				</li>
			</ul>
		</div>
		)
}