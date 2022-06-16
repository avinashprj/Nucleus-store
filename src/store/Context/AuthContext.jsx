import React from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  useLocalStorageGetItem,
  useLocalStorageSetItem,
} from '../../CustomHooks/CustomHooks';
import { FetchCart, FetchWishlist } from '../../serverCalls/index.server';
import { useCartContext } from './CartContext';
import { useWishlistContext } from './WishlistContext';

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({ id: '' });
  // const { setCart } = useCartContext();
  // const [, setWishlist] = useWishlistContext();

  const [login, setLogin] = React.useState(false);
  const userToken = useLocalStorageGetItem('user-token');
  // const { mutate } = useMutation((token) =>
  //   axios.post('/api/auth/verify', {
  //     encodedToken: token,
  //   })
  // );
  // React.useEffect(() => {
  //   (() => {
  //     if (userToken) {
  //       mutate(userToken, {
  //         onSuccess: (response) => {
  //           const { encodedToken } = response.data;
  //           setUser({ ...user, id: userToken });
  //           FetchCartAndWishlist(encodedToken, setCart, setWishlist);
  //         },
  //       });
  //     }
  //   })();
  // }, [mutate, setCart, setWishlist, user, userToken]);

  const value = React.useMemo(
    () => ({ user, setUser, userToken, login, setLogin }),
    [user, userToken, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === 'undefined') {
    throw new Error(
      'useAuthContext must be use in a AuthContextProvider component'
    );
  }
  return context;
};
const useUserLogIn = () =>
  useMutation(({ email, password }) =>
    axios.post('/api/auth/login', {
      email,
      password,
    })
  );

const useGuestLogin = () => {
  const { data, mutate, isLoading } = useMutation(() =>
    axios.post('/api/auth/login', {
      email: 'test@gmail.com',
      password: 'test',
    })
  );

  return { data, mutate, isLoading };
};
const useFetchCart = () => useQuery('cart', FetchCart);
const useFetchWishlist = () => useQuery('wishlist', FetchWishlist);

const FetchCartAndWishlist = async (encodedToken, setCart, setWishlist) => {
  const getCartData = await axios.get('/api/user/cart', {
    headers: {
      authorization: encodedToken,
    },
  });
  if (getCartData) {
    setCart(getCartData.data.cart);
  }

  const getWishlistData = await axios.get('/api/user/wishlist', {
    headers: {
      authorization: encodedToken,
    },
  });
  if (getWishlistData) {
    setWishlist(getWishlistData.data.wishlist);
  }

  useLocalStorageSetItem('user-token', encodedToken);
};

const useSignUpUser = () =>
  useMutation(({ fullName, email, password }) =>
    axios.post('/api/auth/signup', {
      fullName,
      email,
      password,
    })
  );

function logOutUser(setUser, setCart, setWishlist, setLogin, navigate) {
  localStorage.clear();
  setUser([]);
  setCart([]);
  setWishlist([]);
  setLogin(false);
  toast.info('logged out', { autoClose: 500 });
  navigate('/login');
}

export {
  AuthContextProvider,
  useAuthContext,
  useUserLogIn,
  useGuestLogin,
  useSignUpUser,
  logOutUser,
  useFetchCart,
  FetchCartAndWishlist,
};
