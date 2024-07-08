import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

export const AI = () => {
  const handleProductClick = (product) => {
    // Ensure dataLayer array exists
    window.dataLayer = window.dataLayer || [];

    // Push product data to the data layer dynamically
    window.dataLayer.push({
      event: 'product_click',
      product_id: product.id,
      product_name: product.name,
      product_price: product.price
    });

    console.log('Data layer push:', {
      event: 'product_click',
      product_id: product.id,
      product_name: product.name,
      product_price: product.price
    });
  };

  return (
    <div style={{display:'flex' ,gap:"20px" }}>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)} style={{border:'solid black'}} className='pro'>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

