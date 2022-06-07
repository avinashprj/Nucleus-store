import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
);

export default AllRoutes;
