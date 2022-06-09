import { products } from '../../backend/db/products';

const filtersData = {
  categories: [
    ...new Set(products?.map((product) => product?.category?.toLowerCase())),
  ],
  color: [
    ...new Set(products?.map((product) => product?.color?.toLowerCase())),
  ],
};

const sortsData = ['high to low', 'low to high', 'latest'];

export { sortsData, filtersData };
