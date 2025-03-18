import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductList from './Pages/ProductList';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Navbar from './Components/Navbar';
import ProductDetail from './Pages/ProductDetail';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
        <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail/>} /> {/* Product Detail Page */}
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
