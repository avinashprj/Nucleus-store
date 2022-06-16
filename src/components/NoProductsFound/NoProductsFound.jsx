import React from 'react';

export const NoProductsFound = () => (
  <div className="section-center single-product-center ">
    <img
      alt="no product found"
      src="https://i.ibb.co/Wsq6Rvt/Error.png"
      className="single-product-img img no-products"
    />
    <article className="single-product-info">
      <div>
        <h2 className="single-product-title">No products found</h2>
      </div>
    </article>
  </div>
);
