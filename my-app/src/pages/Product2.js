// src/pages/Product2.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.css'; // The CSS file can be shared among product pages
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Product2 = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSaveToFavorites = () => {
    setShowPopup(true);
    setTimeout(() => {
        setShowPopup(false);
    }, 2500); // Popup will disappear after 3 seconds
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="product-container">
      {showPopup && <div className="popup">Saved to favorites!</div>}
      <header className="product-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="logo"><img className='main-logo' src='mainlogo.png' alt='ThreadShare' width='197px' height='46px'/></h1>
      </header>
      <main className="product-details">
      <Slider {...settings}>
          <div>
            <img src="product2_1.png" alt='Product 2 Variant 1' className="product-image" />
          </div>
          <div>
            <img src="product2_2.png" alt='Product 2 Variant 2' className="product-image" />
          </div>
        </Slider>
        <div className="product-info">
          <div className="product-text">
            <h2 className="product-name">"Bad Decisions" Tee</h2>
            <p className="product-description">Got this shirt on a whim from TikTok and it finally came in, but I'm too small for it. Never worn. HMU!</p>
            <p className="product-price">$9/day OR $23.99</p>
          </div>
          <div className="listed-by">
            <img src={`/headshot2.png`} alt='Seller' className="profile-image" />
            <p className="seller-rating">Listed by: Greg Hansen</p>
            <p className="seller-rating">Rating: ★★★☆☆</p>
          </div>
        </div>
      </main>
      <footer className="product-footer">
        <button className="bookmark-button" onClick={handleSaveToFavorites}>save</button>
        <button className="message-button">Message Now</button>
      </footer>
      <Navbar/>
    </div>
  );
};

export default Product2;
