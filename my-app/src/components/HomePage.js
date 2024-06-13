// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
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
          <Link to="/product1">
            <img className='product-img' src='product1.png' alt='shirt1'/>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/product2">
            <img className='product-img' src='product2.png' alt='shirt2'/>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/product3">
            <img className='product-img' src='product3.png' alt='shirt3'/>
          </Link>
        </div>
        {/* Add more products as needed */}
      </main>
      <Navbar/>
    </div>
  );
};

export default HomePage;
