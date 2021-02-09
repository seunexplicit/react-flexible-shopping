import React from 'react';

export default class productView extends React.component {
	constructor(props){
		super(props);
		this.state = {}
	}

	ComponentDidMount(){
		axios.get(`/product/${this.props.match.params.productId}`)
		.then((response)=>{
			this.setState({...this.response.data})
		});
		.catch((error)=>{console.log(error)})
	}

	addProductToCart(products){
		
	}

	render(){
		return(
			<div>
				<p className="headerText">{product.name}</p>
				<VarietyView></VarietyView>
				<productPriceAction></productPriceAction>
				<changeVariety></changeVariety>
				<purchaseButton></purchaseButton>
			</div>
			)
	}
		
}

function VarietyView(props){
	{ product, setProduct } = useState({...props, currentImage:0});
	
	function changeImage(){
		if(product.image){
			let totalNumberOfImages = product.images.length;
			if(totalNumberOfImages){
				setProduct({
					...product,
					currentImage:product.currentImage+1,
				})
				if(product.currentImage>totalNumberOfImages){
					setProduct({
						...product,
						currentImage:0
					})
				}
			}	
		}
		
	}

	return(
		<section>
			<aside onClick={changeImage()}>
				<img src={product.images[product.currentImage]} alt={product.images[product.currentImage]} />
			</aside>
			<aside>
				{
					()=>{ 
						if(product.props.size){
							return(
								<div>
									<label>Size</label><span>{product.props.size}</span>
								</div>
							)
						}
					}
					()=>{
						if(product.props.color){
							return(
								<div>
									<label>Color</label><span>{product.props.color}</span>
								</div>
							)
						}
					}
				}
				<div><label>Cost</label><span>{product.props.size}</span></div>
			</aside>
		</section>
	) 
}


function 