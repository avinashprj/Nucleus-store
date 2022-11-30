import React from 'react';
import { useQuery } from 'react-query';
import { getMaxPrice } from '../../components/Filters/Filters.data';
import { fetchProducts } from '../../serverCalls/cartCalls/fetchProducts';
import { Reducer } from '../Reducer/Reducer';

const ProductContext = React.createContext();
const initialState = {
  sortBy: '',
  filterBy: { categories: [], color: [] },
  price: getMaxPrice(),
  productsList: [],
};

const ProductContextProvider = ({ children }) => {
  const [productCurrentState, dispatch] = React.useReducer(
    Reducer,
    initialState
  );

  const { data, isLoading, isError } = useQuery('products', fetchProducts);
  const productsArray = data?.data.products;
  console.log(data, 'DATATTAAA');

  React.useEffect(() => {
    if (productsArray) {
      dispatch({ type: 'PRODUCTS', payload: productsArray });
    }
  }, [isLoading, productsArray]);

  const value = React.useMemo(
    () => ({ productCurrentState, dispatch, isLoading, isError }),
    [productCurrentState, isLoading, isError]
  );
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (context === 'undefined') {
    throw new Error(
      'useProductContext must be use in a ProductContextProvider component'
    );
  }
  return context;
};
export { ProductContextProvider, useProductContext, initialState };
