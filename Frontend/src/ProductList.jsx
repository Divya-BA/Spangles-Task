import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
