import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductList from './Pages/ProductList';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
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
