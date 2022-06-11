import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Navbar, Footer, SharedLayout } from './components';

import {
  HomePage,
  ErrorPage,
  Wishlist,
  AboutPage,
  ProductListing,
  LoginPage,
  SignupPage,
  SingleProduct,
} from './pages/index';

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products/:productID" element={<SingleProduct />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AllRoutes;
