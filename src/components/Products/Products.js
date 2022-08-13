import React from 'react';
import './Products.css';
import { FaCartPlus } from 'react-icons/fa';

const Products = ({ product, handleAddToCart }) => {
    const { name, img, price, seller, shipping } = product;
    return (
        <div className='single-product'>
            <img src={img} alt="images not found" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p><span className='info-text'>Price:</span> ${price}</p>
                <p><span className='info-text'>Seller:</span>{seller}</p>
                <p><span className='info-text'>Shipping:</span>{shipping}</p>
            </div>

            <button className='cart-button'
                onClick={() => handleAddToCart(product)}>Add To Cart
                <FaCartPlus className='icon'></FaCartPlus>
            </button>

        </div>
    );
};

export default Products;