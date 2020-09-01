import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { name, img, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name"> <Link to={"/product/"+key}>{name}</Link>  </h3>
        <br />
        <p><small>By: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - Order Soon</small></p>
        <button className="cart-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/>  Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;