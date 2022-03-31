import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
 const cart = props.cart;
 

   let totalPrice = 0;
   let shipping = 0;
   let grandTotal = 0;
   let quantity = 0;

   for(const product of cart){    
   quantity = quantity+ product.quantity;
       totalPrice = totalPrice+ (product.price*product.quantity);

       shipping += parseInt(product.shipping);
    }
      
    let tax = parseFloat((totalPrice*0.1).toFixed(2));
    grandTotal = totalPrice+shipping+tax;

   

   
    return (
        <div className='cart'>
             <h2> Order summary</h2>
             <h3>Selected items: {quantity}</h3>
             <h3>Total: ${totalPrice}</h3>
             <p>Shipping: ${shipping}</p>
             <p>Tax: ${tax}</p>
             <h2>Grand Total: ${grandTotal} </h2>
        </div>
    );
};

export default Cart;