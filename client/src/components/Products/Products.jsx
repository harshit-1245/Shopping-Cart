import React from 'react';
import './Products.scss';
import Product from './Product/Product';

const Products = ({ innerPage, headingText, products }) => {
  console.log(products);

  // Check if products is an array
  if (!Array.isArray(products)) {
    // Handle the case where products is not an array
    return (
      <div className='products-container'>
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
          <p>No products available</p>
        </div>
      </div>
    );
  }

  return (
    <div className='products-container'>
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products.map((item) => (
          <Product key={item.id} id={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
