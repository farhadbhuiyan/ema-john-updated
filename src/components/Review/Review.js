import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeRpoduct = (productKey) => {
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
  }, [])
  return (
    <div className="shop-container">
      <div className="product-container">
        {
          cart.map(pd => <ReviewItem
            product={pd}
            key={pd.key}
            removeRpoduct={removeRpoduct}
          ></ReviewItem>)
        }
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
};

export default Review;