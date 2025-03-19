// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import {Navbar,FormControl} from "react-bootstrap"
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
        <h2>My Store</h2>
    </Link>
   {/*  <Navbar>
        <Navbar.Text className="search">
            <FormControl style= {{width:500}}
                placeholder='Search a product'
            />
        </Navbar.Text>
    </Navbar>
     */}
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Navbar;
