function getSortedData(productData, state) {
  if (!state) {
    return productData;
  }
  if (state === 'latest') {
    return productData.filter((product) => product.latest);
  }
  return [...productData].sort((a, b) =>
    state === 'low to high'
      ? a.productPrice - b.productPrice
      : b.productPrice - a.productPrice
  );
}

function filterByEachCategory(products, category, filterBy) {
  return products.filter((product) => {
    if (!filterBy[category].length) {
      return true;
    }
    return filterBy[category].includes(product[category]);
  });
}

function getFilteredData(state, filterObj) {
  return Object.keys(filterObj).reduce(
    (filteredProducts, category) =>
      filterByEachCategory(filteredProducts, category, state.filterBy),
    state.productsList
  );
}

function getPricesData(products, priceState) {
  if (priceState === 0) {
    return products;
  }
  return products.filter((product) => product.productPrice <= priceState);
}
export { getSortedData, getFilteredData, getPricesData };
