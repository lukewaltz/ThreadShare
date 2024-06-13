// src/pages/Product1.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.css'; // The CSS file can be shared among product pages
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Product3 = () => {
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
            <img src="product3_1.png" alt='Product 3 Variant 1' className="product-image" />
          </div>
          <div>
            <img src="product3_2.png" alt='Product 3 Variant 2' className="product-image" />
          </div>
        </Slider>
        <div className="product-info">
          <div className="product-text">
            <h2 className="product-name">Plain Grey T-Shirt</h2>
            <p className="product-description">Got this shirt for my husband. Super-soft, high quality material. Fits well on a 5'10" male.</p>
            <p className="product-price">$34.99</p>
          </div>
          <div className="listed-by">
            <img src={`/headshot3.png`} alt='Seller' className="profile-image" />
            <p className="seller-rating">Listed by: Kathy Carter</p>
            <p className="seller-rating">Rating: ★★★★★</p>
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

export default Product3;
