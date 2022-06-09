import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

export const LoginPage = () => {
  const [state, useState] = React.useState();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="section-outer grid-center">
        <form action="#" className="form form-signin">
          <div className="m-bottom-small flex-jc-center">
            <h3 className="m-bottom-small">Login</h3>
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Email Address"
              required
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Password"
              minLength="8"
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
              type="submit"
              className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
            >
              Login
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
      <Footer />
    </>
  );
};
