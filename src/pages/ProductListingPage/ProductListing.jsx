import React from 'react';
import { FiltersDesktop, FilterPhone, ProductCard } from '../../components';
import { products } from '../../backend/db/products';
import { useProductContext } from '../../store/index.store';
import {
  getFilteredData,
  getPricesData,
  getSortedData,
} from '../../components/Filters/FilterOperations';
import { filtersData } from '../../components/Filters/Filters.data';

export const ProductListing = () => {
  const state = useProductContext();
  let results = {};
  if (state?.productCurrentState?.productsList) {
    const filteredProducts = getFilteredData(
      state.productCurrentState,
      filtersData
    );
    const PricesData = getPricesData(
      filteredProducts,
      state?.productCurrentState.price
    );
    results = getSortedData(PricesData, state.productCurrentState.sortBy);
  }

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
            {state?.isLoading && (
              <img
                style={{ width: '40rem' }}
                src="https://raw.githubusercontent.com/avinashprj/comfy-store/dev/images/output-onlinegiftools.gif"
                className=""
                alt=""
              />
            )}
            {!state?.isLoading &&
              results?.map((product) => (
                <ProductCard key={product.id} singleProduct={product} />
              ))}
            {state?.isError && (
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
