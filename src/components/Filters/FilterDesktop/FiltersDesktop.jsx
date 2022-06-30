import React from 'react';

import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useProductContext } from '../../../store/index.store';
import {
  dispatchClearFilters,
  dispatchFilterProperties,
  dispatchPrice,
  dispatchSort,
} from '../../../store/Reducer/Reducer';
import { getDynamicPriceRange, isChecked } from '../../../utils/utils';
import { filtersData, sortsData } from '../Filters.data';

export const FiltersDesktop = ({ productState }) => {
  const { dispatch } = useProductContext();

  return (
    // console.log(productState);
    // const [params] = useSearchParams();
    // React.useEffect(() => {
    //   if (params.get('category') !== null) {
    //     dispatchFilterProperties(dispatch, {
    //       property: 'categories',
    //       category: 'wired earphones',
    //     });
    //   }
    // }, [dispatch, params]);

    <div className="side-filter">
      <div className="filter-heading ">SORT</div>
      <div className="sort-container m-left-smallest">
        {sortsData?.map((category) => (
          <div key={category} className="filter-item flex-al-center">
            <input
              type="radio"
              className="radio-inp"
              id={category}
              checked={
                productState.sortBy && productState.sortBy === `${category}`
              }
              name="sort"
              onChange={() => dispatchSort(dispatch, category)}
            />
            <label
              key={category}
              style={{ textTransform: 'capitalize' }}
              htmlFor={category}
              className="fs-medium-small m-left-smallest grey"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
      {Object.keys(filtersData).map((property) => (
        <div key={property}>
          <div className="filter-heading ">{property?.toUpperCase()}</div>
          <div className="category-container m-left-smallest">
            {filtersData[property].map((category) => (
              <div key={category}>
                <div key={category} className="filter-item flex-al-center">
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    value={category}
                    className="checkbox pointer"
                    checked={productState.filterBy[property].includes(category)}
                    onChange={() =>
                      dispatchFilterProperties(dispatch, {
                        property,
                        category,
                      })
                    }
                  />
                  <label
                    style={{ textTransform: 'capitalize' }}
                    htmlFor={category}
                    className="fs-medium-small m-left-smallest grey"
                  >
                    {category}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="filter-heading fs-medium-small">Rating</div>
      <div className="flex-al-center filter-item slider-container">
        <input
          type="range"
          id="range"
          min={getDynamicPriceRange(productState.productsList)[0]}
          max={getDynamicPriceRange(productState.productsList)[1]}
          value={productState.price}
          className="slider-inp"
          onChange={(e) => dispatchPrice(dispatch, e)}
        />
        <span className="slider-value m-left-smallest">
          {productState.price}
        </span>
      </div>
      <button
        onClick={() => dispatchClearFilters(dispatch)}
        type="submit"
        className="btn btn-round btn-outline-primary clear-btn m-top-medium"
      >
        Clear Filters
      </button>
    </div>
  );
};
