import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../serverFetching/fetchProducts';
import { Reducer } from '../Reducer/Reducer';

const ProductContext = React.createContext();
const initialState = {
  sortBy: '',
  filterBy: { categories: [], color: [] },
  rating: 0,
  productsList: [],
};

const ProductContextProvider = ({ children }) => {
  const [productCurrentState, dispatch] = React.useReducer(
    Reducer,
    initialState
  );

  const { productsData, isLoading, isError, error } = useQuery(
    'products',
    fetchProducts
  );
  if (productsData) {
    dispatch({ type: 'PRODUCTS', payload: productsData });
  } else if (isError) {
    throw new Error(`${error.message}`);
  }

  console.log(productsData);

  return (
    <ProductContextProvider
      value={{ productCurrentState, dispatch, isLoading }}
    >
      {children}
    </ProductContextProvider>
  );
};

const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error(
      'useProductContext must be use in a ProductContextProvider component'
    );
  }
  return context;
};
export { ProductContextProvider, useProductContext, initialState };
