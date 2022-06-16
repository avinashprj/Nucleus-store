import React from 'react';
import { useMutation } from 'react-query';
import {
  AddToWishlist,
  RemoveFromWishlist,
} from '../../serverCalls/index.server';

const WishlistContext = React.createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = React.useState([]);

  const value = React.useMemo(
    () => [wishlist, setWishlist],
    [wishlist, setWishlist]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => {
  const context = React.useContext(WishlistContext);
  if (context === 'undefined') {
    throw new Error(
      'useWishlistContext must be use in a WishlistContextProvider component'
    );
  }
  return context;
};

const useAddToWishlist = () => useMutation(AddToWishlist);
const useDeleteFromWishlist = () => useMutation(RemoveFromWishlist);
export {
  useWishlistContext,
  WishlistContextProvider,
  useAddToWishlist,
  useDeleteFromWishlist,
};
