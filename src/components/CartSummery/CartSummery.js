import React from 'react';
import './CartSummery.css';
const CartSummery = ({ cart }) => {

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    };
    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = total + shipping + parseInt(tax);
    return (
        <div className='right-side-cart-info'>
            <h4 className='summery-text'>Product Summery</h4>
            <div className='cart-info'>
                <h5>Selected Items:{cart.length}</h5>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${grandTotal}</p>
            </div>
        </div>
    );
};

export default CartSummery;