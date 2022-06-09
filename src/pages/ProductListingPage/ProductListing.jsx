import React from 'react';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { Footer, Navbar, FiltersDesktop } from '../../components';
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { Footer, Navbar, FiltersDesktop } from '../../components';
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import {
  Footer,
  Navbar,
  FiltersDesktop,
  FilterPhone,
  ProductCard,
} from '../../components';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import { products } from '../../backend/db/products';

export const ProductListing = () => {
  const [state, useState] = React.useState();
  return (
    <>
<<<<<<< Updated upstream
      <header>
        <Navbar />
      </header>
=======
<<<<<<< Updated upstream
      <header>
        <Navbar />
      </header>
=======
<<<<<<< Updated upstream
      <header>
        <Navbar />
      </header>
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      <main>
        <section className="page-hero">
          <div className="section-center">
            <h3 className="page-hero-title">
<<<<<<< Updated upstream
              Home <span className="title-slash">/</span> Products (
              <span className="spc-txt">{products.length}</span>)
=======
<<<<<<< Updated upstream
              Home <span className="title-slash">/</span> Products
=======
<<<<<<< Updated upstream
              Home <span className="title-slash">/</span> Products (
              <span className="spc-txt">{products.length}</span>)
=======
<<<<<<< Updated upstream
              Home <span className="title-slash">/</span> Products
=======
              Home <span className="title-slash">/</span> Products (
              <span className="spc-txt">{products.length}</span>)
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            </h3>
          </div>
        </section>
        <section className="main-products">
          <section className="sticky filter-container">
            <FiltersDesktop />
          </section>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
        </section>
      </main>
      <Footer />
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
        </section>
      </main>
      <Footer />
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
          <section className="products-container">
            {products.map((product) => (
              <ProductCard key={product.id} singleProduct={product} />
            ))}
          </section>
        </section>
      </main>
      <FilterPhone />
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
      <Footer />
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </>
  );
};
