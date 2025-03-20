// src/pages/About.js
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import ProductService from '../Services/ProductService';

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }
`; 

function Checkout() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate(); // Hook to navigate programmatically
    const handleBackToThankyouPage = () => 
    {
      navigate('/orderPlaced'); // Navigate to Place Order Page 
    } 
    return (
        <div className="checkout">
            <h1>Checkout Page</h1>
          <form>
            <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        </form>
            <Button onClick={handleBackToThankyouPage}>Place Order</Button> 
        </div>
    ); 
}


export default Checkout;
