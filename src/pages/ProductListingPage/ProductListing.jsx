import React from 'react';
import { Footer, Navbar, FiltersDesktop } from '../../components';
import { products } from '../../backend/db/products';

export const ProductListing = () => {
  const [state, useState] = React.useState();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="page-hero">
          <div className="section-center">
            <h3 className="page-hero-title">
              Home <span className="title-slash">/</span> Products
            </h3>
          </div>
        </section>
        <section className="main-products">
          <section className="sticky filter-container">
            <FiltersDesktop />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};
