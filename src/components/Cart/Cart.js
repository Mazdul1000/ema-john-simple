import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   let totalPrice = 0;

   cart.map(product=>totalPrice += parseInt(product.price))
      
    
   

    console.log(props)
    return (
        <div>
             <h3> Order summary</h3>
             <h2>Selected items: {cart.length}</h2>
             <h3>Total: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;