import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import About from './Components/About';
import Contact from './Components/Contact';
import Terms from './Components/Terms';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
