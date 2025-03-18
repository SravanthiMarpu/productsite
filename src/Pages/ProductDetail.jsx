import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import ProductService from '../Services/ProductService';


function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleBackToPLP = () => {
    navigate('/products'); // Navigate back to the Product Listing Page (PLP)
  };
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching Product with ID: ", id);
    
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const productData = await ProductService.getProduct(id); // Fetch product by ID
        setProduct(productData);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]); // Re-fetch when the product ID changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      {/* Back to PLP button */}
      <button onClick={handleBackToPLP}>Back to Products</button>
    </div>
  );
}

export default ProductDetail;
