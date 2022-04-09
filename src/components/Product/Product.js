import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {

    
    const {handleAddToCart,product} = props;
      
    const{name, price, seller,img,ratings} = product;
    
    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
           <button onClick={() => handleAddToCart(product)} className='cart-btn'>
               <p>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart} />
               </button>

        </div>
    );
};

export default Product;