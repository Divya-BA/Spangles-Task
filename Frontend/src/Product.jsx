import React, { useState, useEffect } from 'react';

function Product({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const selectedProductIndex = product.sizes.indexOf(selectedSize);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    setSelectedSize(product.sizes[0]);
  }, [product.sizes]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <img
          src={selectedSize ? product.images[selectedProductIndex] : ''}
          alt={`Product ${product.name}`}
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      </div>
      <div>
        <h3>{product.name}</h3>
        <div>
          <label>Select Size:</label>
          <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        {selectedSize && (
          <div>
            <p>Selected Size: {selectedSize}</p>
            <p>Price: ${product.amounts[selectedProductIndex]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
