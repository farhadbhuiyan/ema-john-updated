import React from 'react';

const Cart = (props) => {
  const cart = props.cart;

  //calculate total using reduce 

 // const total = cart.reduce((total, prod) => total + prod.price, 0);

 //calculate total using for loop
 let total = 0;
 for(let i = 0; i < cart.length; i++){
   const product = cart[i];
        total = total + product.price;
 }

 let shipping = 0;
 if(total > 35){
   shipping = 0;
 }
 else if(total > 15){
   shipping = 4.99;
 }
 else if(total > 0){
   shipping = 12.99;
 }

 let tax = total/10;

 //function for format number

 const formatNumber = num => {
   const precision =  num.toFixed(2);
   return Number(precision);
 }

 let grandTotal = total + shipping + tax;
  return (
    <div>
      <h4>Order Summery</h4>
  <p>Items Ordered: {cart.length}</p>
  <p>Product Price: ${formatNumber(total)}</p>
  <p>Shipping Cost: ${shipping}</p>
  <p>Tax + Vat: ${formatNumber(tax)}</p>
  <p>Total Price: ${formatNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;