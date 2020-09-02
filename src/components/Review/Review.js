import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeRpoduct = (productKey) =>{
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  useEffect(() => {
    //cart load form local storage
    const savedcart = getDatabaseCart();
    const productKeys = Object.keys(savedcart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedcart[key];
      return product;
      });
      setCart(cartProducts);
  },[])
  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>]
      {
        cart.map(pd => <ReviewItem 
          product={pd}
          key = {pd.key}
          removeRpoduct = {removeRpoduct}
          ></ReviewItem>)
      }
    </div>
  );
};

export default Review;