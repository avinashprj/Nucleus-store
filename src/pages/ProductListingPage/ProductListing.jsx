import React from 'react';
import {
  Footer,
  Navbar,
  FiltersDesktop,
  FilterPhone,
  ProductCard,
} from '../../components';
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
              Home <span className="title-slash">/</span> Products (
              <span className="spc-txt">{products.length}</span>)
            </h3>
          </div>
        </section>
        <section className="main-products">
          <section className="sticky filter-container">
            <FiltersDesktop />
          </section>
          <section className="products-container">
            {products.map((product) => (
              <ProductCard key={product.id} singleProduct={product} />
            ))}
          </section>
        </section>
      </main>
      <FilterPhone />
      <Footer />
    </>
  );
};
