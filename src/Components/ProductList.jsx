import React from 'react';
import styled from 'styled-components';

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
  const products = [
    { id: 1, name: 'Smartphone', price: '$499', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Headphones', price: '$150', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Smartwatch', price: '$199', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Camera', price: '$599', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container>
      <h1>Products</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button>Add to Cart</Button>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductList;
