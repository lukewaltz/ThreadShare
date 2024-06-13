// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
// Import Product2 and Product3 similarly

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          {/* Add routes for Product2 and Product3 similarly */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
