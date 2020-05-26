import React from 'react';

class ProductCard extends React.Component {

  render() {

  return (

    <div className="card active">

		<img src={this.props.product.images[0]['url']} alt="" />
		<h5>{this.props.product.title }</h5>
		<small>${this.props.product.price}.00</small>

        </div>

    )}
  }

export default ProductCard;