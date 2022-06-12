import React from 'react';
import { FiltersDesktop, FilterPhone, ProductCard } from '../../components';
import { useProductContext } from '../../store/index.store';
import {
  getFilteredData,
  getPricesData,
  getSortedData,
} from '../../components/Filters/FilterOperations';
import { filtersData } from '../../components/Filters/Filters.data';
import { useMediaQuery } from '../../CustomHooks/CustomHooks';

export const ProductListing = () => {
  const mobView = useMediaQuery('(max-width: 37.5em)');
  const state = useProductContext();
  let results = {};
  if (state?.productCurrentState?.productsList) {
    const filteredProducts = getFilteredData(
      state.productCurrentState,
      filtersData
    );
    console.log(
      filteredProducts,
      state?.productCurrentState.price,
      'ASSSSSSSS'
    );
    const PricesData = getPricesData(
      filteredProducts,
      state?.productCurrentState.price
    );
    console.log(PricesData, 'sassss');
    results = getSortedData(PricesData, state.productCurrentState.sortBy);
  }

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="section-center">
            <h3 className="page-hero-title">
              Home <span className="title-slash">/</span> Products (
              <span className="spc-txt">{results.length}</span>)
            </h3>
          </div>
        </section>
        <section className="main-products">
          <section className="sticky filter-container">
            <FiltersDesktop
              productState={
                state.productCurrentState ? state.productCurrentState : ''
              }
              dispatch={state?.dispatch}
            />
          </section>
          <section
            className={`products-container ${
              results?.length > 0 && results?.length <= 4
                ? ' products-container-start'
                : 'products-container-center'
            }`}
          >
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
            {results.length === 0 && <h2>NO PRODUCTS FOUND</h2>}
          </section>
        </section>
      </main>

      <FilterPhone />
    </>
  );
};
