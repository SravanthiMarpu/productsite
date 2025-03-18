

  const API_URL = 'https://dummyjson.com/products';

export const getProducts = async () => {
  try 
  {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.products; // Returns the array of products
  } 
  catch (error) 
  {
    console.error('Error fetching products:', error);
    return [];
  }
};

 const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data; // Returns a single product object
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export default { getProducts, getProduct };
