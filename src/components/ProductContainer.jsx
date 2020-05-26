import React from 'react';
import ProductCard from './ProductCard'

class ProductContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		const url = "http://localhost:3000/items";
		fetch(url)
		.then(resp => resp.json())
		.then(productsObj => {
			this.setState({
				products: productsObj
			})
			console.log(this.state.products)
		})
	}

  render() {
  return (

	<div className="cards">

	{ this.state.products.map((product) => {
		return (
			<ProductCard 
			key={product.id}
			product={product}
			/>

		) 
	})
}

    </div>
    )}
  }

export default ProductContainer;
  
