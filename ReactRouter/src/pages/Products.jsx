import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <Link to='/products/product-1'>products 1</Link>
        <Link to='/products/product-2'>products 2</Link>
        <Link to='/products/product-3'>products 3</Link>
      </ul>
    </>
  );
};

export default Products;
