import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3b2e;
  }
`;

const Home = () => (
  <HomeContainer>
    <h1>Welcome to Our E-Commerce Store</h1>
    <p>Find the best products at unbeatable prices.</p>
    <Link to="/products">
      <Button>Browse Products</Button>
    </Link>
  </HomeContainer>
);

export default Home;