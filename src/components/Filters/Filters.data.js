import { products } from '../../backend/db/products';

function getMaxPrice() {
  return products.reduce(
    (acc, curr) => (acc > curr.productPrice ? acc : curr.productPrice),
    0
  );
}

const filtersData = {
  categories: [
    ...new Set(products?.map((product) => product?.categories?.toLowerCase())),
  ],
  color: [
    ...new Set(products?.map((product) => product?.color?.toLowerCase())),
  ],
};

const sortsData = ['high to low', 'low to high', 'latest'];

export { sortsData, filtersData, getMaxPrice };
