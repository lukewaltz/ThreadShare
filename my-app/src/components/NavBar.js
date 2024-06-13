import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (

    <nav className="nav-bar">
        <div className="nav-item">
          <img src='menu.png' width='40px' height='40px' alt='menu'/>
        </div>
        <div className="nav-item">
          <img src='post.png' width='40px' height='40px' alt='post'/>
        </div>
        <div className="nav-item">
          <img src='home.png' width='40px' height='40px' alt='home'/>
        </div>
        <div className="nav-item">
          <img src='msg.png' width='40px' height='40px' alt='msg'/>
        </div>
        <div className="nav-item">
          <img src='prof.png' width='40px' height='40px' alt='prof'/>
        </div>
    </nav>
  );
};

export default Navbar;