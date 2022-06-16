import React from 'react';

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

function alreadyPresent(state, product) {
  return state.some((card) => card.id === product.id);
}

function isPresentInState(item, state) {
  return state?.find((stateItem) => stateItem._id === item._id);
}

/* eslint-disable no-param-reassign */
const cartTotalPrice = (cart) =>
  cart.reduce((acc, item) => (acc += item.productPrice * item.qty), 0);

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
  return formattedPrice;
};
export {
  ErrorFallback,
  isChecked,
  getDynamicPriceRange,
  alreadyPresent,
  isPresentInState,
  cartTotalPrice,
  formatPrice,
};
