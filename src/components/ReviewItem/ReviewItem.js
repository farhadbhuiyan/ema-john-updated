import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  return (
    <div className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <br/>
      <button 
      className="cart-button"
      onClick = {() => props.removeRpoduct(key)}
      >Remove</button>
    </div>
  );
};

export default ReviewItem;