import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import {
  AddToCart,
  DeleteFromCart,
  UpdateCart,
} from '../../serverCalls/index.server';

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [toggleCartModal, setToggleCartModal] = React.useState(false);

  const value = React.useMemo(
    () => ({
      cart,
      setCart,
      toggleCartModal,
      setToggleCartModal,
    }),
    [cart, toggleCartModal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (context === 'undefined') {
    throw new Error(
      'useCartContext must be use in a CartContextProvider component'
    );
  }
  return context;
};

const useAddToCart = () => useMutation(AddToCart);
const useUpdateCart = () => useMutation(UpdateCart);
const useDeleteFromCart = () => useMutation(DeleteFromCart);
export {
  useCartContext,
  CartContextProvider,
  useAddToCart,
  useUpdateCart,
  useDeleteFromCart,
};
