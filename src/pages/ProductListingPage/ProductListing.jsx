import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FiltersDesktop, FilterPhone, ProductCard } from '../../components';
import { useProductContext } from '../../store/index.store';
import {
  getFilteredData,
  getPricesData,
  getSortedData,
} from '../../components/Filters/FilterOperations';
import { filtersData } from '../../components/Filters/Filters.data';
import { useMediaQuery } from '../../CustomHooks/CustomHooks';
import { useSearchContext } from '../../store/Context/SearchContext';

export const ProductListing = () => {
  const mobView = useMediaQuery('(max-width: 37.5em)');
  const [search] = useSearchParams();
  const state = useProductContext();
  const [results, setResults] = React.useState([]);
  const { dispatch } = useProductContext();
  const { searchQueryResult, setSearchQueryResult } = useSearchContext();
  const searchQuery = search.get('query');

  React.useEffect(() => {
    if (searchQuery === null && state?.productCurrentState?.productsList) {
      let filteredProducts = [];

      filteredProducts = getFilteredData(
        state.productCurrentState,
        filtersData
      );

      const PricesData = getPricesData(
        filteredProducts,
        state?.productCurrentState.price
      );

      const newResults = getSortedData(
        PricesData,
        state.productCurrentState.sortBy
      );

      setResults(newResults);
    } else if (searchQuery !== null) {
      setSearchQueryResult(
        state?.productCurrentState?.productsList.filter((word) =>
          word.productTitle
            .toLowerCase()
            .includes(search.get('query').trim().toLowerCase())
        )
      );
    }
  }, [
    dispatch,
    search,
    searchQuery,
    setSearchQueryResult,
    state.productCurrentState,
    state.productCurrentState?.productsList,
  ]);

  return (
    <>
      {search.get('query') !== null && (
        <>
          <section className="page-hero">
            <div className="section-center">
              <h3 className="page-hero-title">
                Home <span className="title-slash">/</span> Products (
                <span className="spc-txt">{searchQueryResult.length}</span>)
              </h3>
            </div>
          </section>
          <section className="main-products">
            <section
              className={`products-container ${
                mobView
                  ? 'products-container-center'
                  : searchQueryResult?.length > 0 &&
                    searchQueryResult?.length <= 4
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
                searchQueryResult?.map((product) => (
                  <ProductCard key={product.id} singleProduct={product} />
                ))}
              {state?.isError && (
                <div style={{ fontSize: '5rem' }}>
                  Something Went wrong while fetching products
                </div>
              )}
              {!state?.isLoading &&
                !state?.isError &&
                searchQueryResult.length === 0 && <h2>NO PRODUCTS FOUND</h2>}
            </section>
          </section>
        </>
      )}
      {search.get('query') === null && (
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
                {!state?.isLoading &&
                  !state?.isError &&
                  results.length === 0 && <h2>NO PRODUCTS FOUND</h2>}
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
      )}
    </>
  );
};
