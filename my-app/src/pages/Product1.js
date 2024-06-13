// src/pages/Product1.js
import React from 'react';
import './Product.css'; // The CSS file can be shared among product pages
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Product1 = () => {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      <header className="product-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="logo">ThreadShare</h1>
      </header>
      <main className="product-details">
        <img src="product1.png" alt='Product 1' className="product-image" />
        <div className="product-info">
          <div className="product-text">
            <h2 className="product-name">Product 1</h2>
            <p className="product-description">This is the description of Product 1. It's a high-quality shirt available for both rent and purchase.</p>
            <p className="product-price">$30.00</p>
          </div>
          <div className="listed-by">
            <img src={`/headshot.jpg`} alt='Seller' className="profile-image" />
            <p className="seller-rating">Listed by: John Doe</p>
            <p className="seller-rating">Rating: ★★★★☆</p>
          </div>
        </div>
      </main>
      <footer className="product-footer">
        <button className="bookmark-button">save</button>
        <button className="message-button">Message Now</button>
      </footer>
      <Navbar/>
    </div>
  );
};

export default Product1;
