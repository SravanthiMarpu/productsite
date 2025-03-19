// src/pages/About.js
import styled from 'styled-components';
import React from 'react';
import {useNavigate } from "react-router-dom";
import ProductDetail from './ProductDetail';

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
  
const Cart = () => {
    

    const navigate = useNavigate(); // Hook to navigate programmatically
    const handleBackToPlaceOrderPage = () => 
    {
      navigate('/orderPlaced'); // Navigate to Place Order Page 
    } 
    return (
        <div className="cart">
            <Button onClick={handleBackToPlaceOrderPage} >Payment</Button> 
        </div>
    );
    
};

export default Cart;
