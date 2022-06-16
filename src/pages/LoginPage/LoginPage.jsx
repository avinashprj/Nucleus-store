import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FetchCartAndWishlist,
  useAuthContext,
  useFetchCart,
  useGuestLogin,
  useUserLogIn,
} from '../../store/Context/AuthContext';
import { useCartContext } from '../../store/Context/CartContext';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { useInput } from '../../CustomHooks/CustomHooks';
import { FetchCart } from '../../serverCalls/cartCalls/FetchCart';

export const LoginPage = () => {
  const { user, setUser, encodedToken, login, setLogin } = useAuthContext();

  const { cart, setCart } = useCartContext();
  const [wishlist, setWishList] = useWishlistContext();
  const navigate = useNavigate();
  const { data, mutate, isLoading, isSuccess } = useGuestLogin();
  const newToken = data?.data?.encodedToken;
  const { data: userLoginData, mutate: userLogin } = useUserLogIn();
  const loginToken = userLoginData?.data?.encodedToken;
  const { inputState, inputUpdate } = useInput({
    email: '',
    password: '',
  });

  function LoginGuestSuccessCallBack(token) {
    setLogin(true);
    setUser({ ...user, id: token });
    FetchCartAndWishlist(token, setCart, setWishList);
    localStorage.setItem('user-token', token);
  }

  function loginInUser(e) {
    e.preventDefault();
    userLogin(inputState, {
      onSuccess: (bigData) => {
        LoginGuestSuccessCallBack(bigData.data.encodedToken);
        toast.success('Logged In Successfully');
        navigate('/');
      },
      onError: ({
        response: {
          data: { errors },
        },
      }) => {
        toast.error(`${errors[0]?.toString()}`);
      },
    });
  }

  return (
    <main className="section-outer grid-center auth-section">
      <form action="#" className="form form-signin">
        <div className="m-bottom-small flex-jc-center">
          <h3 className="m-bottom-small">Login</h3>
        </div>
        <div className="form-group">
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Email Address"
            onChange={inputUpdate}
            required
          />
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
        </div>
        <div className="form-group">
          <input
            name="password"
            id="password"
            type="password"
            className="form-input"
            placeholder="Password"
            minLength="4"
            onChange={inputUpdate}
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <div className="form-group">
          <div className="form-radio-group flex-nav-wrap">
            <input
              id="large"
              type="checkbox"
              className="form-radio-input"
              name="size"
            />
            <label htmlFor="large" className="form-radio-label">
              <span className="form-radio-button"> </span>
              Remember Me
            </label>
            <Link to="/" className="form-forgot">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="form-group">
          <button
            onClick={(e) => {
              loginInUser(e);
            }}
            type="submit"
            className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
          >
            Login
          </button>
          <button
            onClick={() => {
              mutate(null, {
                onSuccess: (bigData) => {
                  LoginGuestSuccessCallBack(bigData.data.encodedToken);
                  toast.success('Logged In Successfully');
                  navigate('/');
                },
              });
            }}
            type="button"
            className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600 m-top-medium"
          >
            Guest Login
          </button>
        </div>
        <div className="form-footer form-group flex">
          <p className="">
            <span>
              <i className="fa fa-regular fa-face-frown" />
            </span>
            Don't have an account ?
            <Link
              to="/signup"
              id="form-signin-link"
              href="#"
              className="link form-footer-link"
            >
              Create one
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
