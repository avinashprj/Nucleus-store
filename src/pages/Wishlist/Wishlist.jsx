import React from 'react';
import { BsFillHeartFill, BsStarFill } from 'react-icons/bs';
import { Navbar, Footer, ProductCard } from '../../components';
import { products } from '../../backend/db/products';

export const Wishlist = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            <span className="title-slash">/</span> Wishlist
          </h3>
        </div>
      </section>
      <section className="wishlist-products">
        <div
          className={`products ${
            products?.length !== 1 ? 'more-products' : ''
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} singleProduct={product}>
              Go to Cart
            </ProductCard>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);
