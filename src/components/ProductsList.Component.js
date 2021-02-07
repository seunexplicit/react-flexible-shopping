import React, { Fragment, useState } from 'react'
import productNotFound from './productNotFound.Component';


export default function productList(props){
	 { products, setProucts } = useState({});

	
	if(props.productNotFound){
		getProducts().then(
		(response)=>{
			setProucts(response.data);
			if(products){
				return(
					<Fragment>
						<productNotFound/>
						{ProductsListView(products)}
					</Fragment>
				);
			}
			else{
				<productNotFound/>
			}	
		},
		()=>{
			return (<productErrorPage/>);
		});
		
	}
	else if(props.products){
		setProucts(props.products);
		return(
			<Fragment>
				{ ProductsListView(products) }
			</Fragment>
			)
	}
	else{
		getProducts().then(
		(response)=>{
			setProucts(response.data);
			if(products){
				return(
					<Fragment>
						{ ProductsListView(products) }
					</Fragment>
				)
			}
			else{
				return(<productNotFound/>)
			}
		}, 
		(err)=>{
			return (<productErrorPage/>)
		});
	}

	function ProductsListView(_products){
		return(
			<section>
				{
					_products.map((value)=>{
						<Product product={value}></Product>
					})
				}
			</section>
		)
	}

	function getProducts(){
	 	return axios.get('/product/')
	}
} 