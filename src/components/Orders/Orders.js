import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'

const Orders = () => {

    const [products, setProducts] = useProducts();

    const [cart,setCart] = useCart(products);


    return (
        <div>
            <div className="cart-container">
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;