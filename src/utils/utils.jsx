import React from 'react';
import { products } from '../backend/db/products';

function ErrorFallback({ error }) {
  return (
    <div className="error-txt-outer">
      <div className="error-container">
        <p className="glitch">
          <span aria-hidden="true">{error?.toString() || 'Error'}</span>
          {error?.toString() || 'Error'}
          <span aria-hidden="true">{error?.toString() || 'Error'}</span>
        </p>
      </div>
    </div>
  );
}
function isChecked(property, listItem, productStates) {
  return productStates.filterBy[property].includes(listItem);
}
const getDynamicPriceRange = (productData) =>
  productData.reduce(
    (priceRange, productCard) => [
      Math.min(productCard.productPrice, priceRange[0]),
      Math.max(productCard.productPrice, priceRange[1]),
    ],
    [Number.MAX_SAFE_INTEGER, 0]
  );

export { ErrorFallback, isChecked, getDynamicPriceRange };
