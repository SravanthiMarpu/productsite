import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import {NavLink } from "react-router-dom";
import { getProducts } from "../Services/ProductService";

const Container = styled.div`
  padding: 2rem;
  background-color: #f0f2f5;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 15px;
`;

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

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <h1>Products</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <NavLink to = {`/product/${product.id}`}><p>{product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p></NavLink>
            <Button>Add to Cart</Button> 
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  )
};

export default ProductList;