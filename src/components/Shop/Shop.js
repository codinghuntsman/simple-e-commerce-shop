import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CartSummery from '../CartSummery/CartSummery';
import Products from '../Products/Products';
import './Shop.css';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    };
    return (
        <div className='shop-main-div'>
            <h2 className='page-title'>Welcome to E-commerce Shopping Center</h2>
            <div className='products'>
                <div className='product-card'>
                    {
                        products.map(product => <Products key={product.id} product={product}
                            handleAddToCart={handleAddToCart}></Products>)
                    }
                </div>
                <div className='cart-summery'>
                    <CartSummery cart={cart}></CartSummery>
                </div>
            </div>
        </div>
    );
};

export default Home;