import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ErrorPage,
  Wishlist,
  AboutPage,
  ProductListing,
  LoginPage,
  SignupPage,
} from './pages/index';

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductListing />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route
      path="/products/:productID"
      element={<div style={{ fontSize: '10rem' }}>SINGLE PRODUCT</div>}
    />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AllRoutes;
