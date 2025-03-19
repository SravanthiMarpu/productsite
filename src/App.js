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
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';


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
        <Route path="/products" element={<ProductList />} />  {/*PLP*/}
        <Route path="/product/:id" element={<ProductDetail/>} /> {/* Product Detail Page */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orderPlaced" element={<Payment/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
