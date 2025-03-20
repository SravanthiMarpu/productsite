// src/pages/About.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const ThankyouPage = () => (
  <div className="ThankyouPage">
    <h1 style={{ textAlign: 'center' }}> Thankyou for Placing Order </h1>
    <p style={{ textAlign: 'center' }}>Your order has been successfully placed.</p>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
  </div>
);

export default ThankyouPage;
