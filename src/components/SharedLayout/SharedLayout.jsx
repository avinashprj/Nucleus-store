import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

export const SharedLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
    <Footer />
  </>
);
