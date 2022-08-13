import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-text'>
                <h3>E-Commerce Shopping Center</h3>
            </div>
            <div className='navbar-link'>
                <a href="/#">Home</a>
                <a href="/#">Info</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
            </div>
        </div>
    );
};

export default NavigationBar;