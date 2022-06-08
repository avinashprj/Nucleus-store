import { products } from '../../backend/db/products';

const filtersData = {
  categories: [
    ...new Set(products?.map((product) => product?.category?.toLowerCase())),
  ],
  color: [
    ...new Set(products?.map((product) => product?.color?.toLowerCase())),
  ],
};

const sortsData = ['low to high', 'high to low', 'latest'];

export { sortsData, filtersData };
