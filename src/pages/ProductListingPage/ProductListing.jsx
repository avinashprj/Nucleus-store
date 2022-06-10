import React from 'react';

import { FiltersDesktop, FilterPhone, ProductCard } from '../../components';

import { products } from '../../backend/db/products';
import { useProductContext } from '../../store/index.store';

export const ProductListing = () => {
  const results = useProductContext();
  return (
    <>
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
            {results?.isLoading && (
              <img
                style={{ width: '40rem' }}
                src="https://raw.githubusercontent.com/avinashprj/comfy-store/dev/images/output-onlinegiftools.gif"
                className=""
                alt=""
              />
            )}
            {!results?.isLoading &&
              results?.productCurrentState.productsList.map((product) => (
                <ProductCard key={product.id} singleProduct={product} />
              ))}
            {results?.isError && (
              <div style={{ fontSize: '5rem' }}>
                Something Went wrong while fetching products
              </div>
            )}
          </section>
        </section>
      </main>

      <FilterPhone />
    </>
  );
};
