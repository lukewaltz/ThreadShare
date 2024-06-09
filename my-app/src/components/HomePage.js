// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import Navbar from './NavBar';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="logo">ThreadShare</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="filters">Filters</div>
      </header>
      <main className="product-gallery">
        {/* Hardcoded product items for now */}
        <div className="product-item">
            <img className='product-img' src='product1.png' alt='shirt1'/>
        </div>
        <div className="product-item">
            <img className='product-img' src='product2.png' alt='shirt2'/>
        </div>
        <div className="product-item">
            <img className='product-img' src='product3.png' alt='shirt3'/>
        </div>
        {/* Add more products as needed */}
      </main>
      <Navbar/>
    </div>
  );
};

export default HomePage;
