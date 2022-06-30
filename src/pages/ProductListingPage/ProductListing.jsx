import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersDesktop, FilterPhone, ProductCard } from '../../components';
import { useProductContext } from '../../store/index.store';
import {
  getFilteredData,
  getPricesData,
  getSortedData,
} from '../../components/Filters/FilterOperations';
import { filtersData } from '../../components/Filters/Filters.data';
import { useMediaQuery } from '../../CustomHooks/CustomHooks';
import { dispatchFilterProperties } from '../../store/Reducer/Reducer';

export const ProductListing = () => {
  const mobView = useMediaQuery('(max-width: 37.5em)');
  const state = useProductContext();
  const [results, setResults] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { dispatch } = useProductContext();

  // console.log(state?.productCurrentState);
  React.useEffect(() => {
    if (state?.productCurrentState?.productsList) {
      let filteredProducts = [];
      if ([...searchParams].length !== 0) {
        // dispatchFilterProperties(dispatch, {
        //   property: 'categories',
        //   category: 'wired earphones',
        // });
        filteredProducts = getFilteredData(
          state.productCurrentState,
          filtersData
        );
      } else {
        filteredProducts = getFilteredData(
          state.productCurrentState,
          filtersData
        );
      }

      const PricesData = getPricesData(
        filteredProducts,
        state?.productCurrentState.price
      );

      const newResults = getSortedData(
        PricesData,
        state.productCurrentState.sortBy
      );

      setResults(newResults);
    }
  }, [
    dispatch,
    searchParams,
    state.productCurrentState,
    state.productCurrentState?.productsList,
  ]);
  // let results = [];

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
              mobView
                ? 'products-container-center'
                : results?.length > 0 && results?.length <= 4
                ? 'products-container-start'
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
            {!state?.isLoading && !state?.isError && results.length === 0 && (
              <h2>NO PRODUCTS FOUND</h2>
            )}
          </section>
        </section>
      </main>

      <FilterPhone
        productState={
          state.productCurrentState ? state.productCurrentState : ''
        }
        dispatch={state?.dispatch}
      />
    </>
  );
};
