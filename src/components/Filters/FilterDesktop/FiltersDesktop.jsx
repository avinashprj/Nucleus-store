import React from 'react';
import { filtersData, sortsData } from '../Filters.data';

export const FiltersDesktop = () => {
  const [state, useState] = React.useState();
  console.log(filtersData.categories);
  return (
    <div className="side-filter">
      <div className="filter-heading fs-medium">Sort</div>
      <div className="sort-container m-left-smallest">
        {sortsData?.map((category) => (
          <div key={category} className="filter-item flex-al-center">
            <input
              type="radio"
              className="radio-inp"
              id="High to low"
              name="radio-group"
            />
            <label
              style={{ textTransform: 'capitalize' }}
              htmlFor="watches-category"
              className="fs-medium-small m-left-smallest grey"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="filter-heading fs-medium">Categories</div>
      <div className="filter-category-container m-left-smallest">
        {filtersData?.categories.map((category) => (
          <div key={category} className="filter-item flex-al-center">
            <input
              type="checkbox"
              id="select-box"
              name="bydefault"
              value="watches-category"
              className="checkbox pointer"
            />
            <label
              style={{ textTransform: 'capitalize' }}
              htmlFor="watches-category"
              className="fs-medium-small m-left-smallest grey"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="filter-heading fs-medium">Colors</div>
      <div className="filter-colors-container m-left-smallest">
        {filtersData?.color.map((category) => (
          <div key={category} className="filter-item flex-al-center">
            <input
              type="checkbox"
              id="select-box"
              name="bydefault"
              value="watches-category"
              className="checkbox pointer"
            />
            <label
              style={{ textTransform: 'capitalize' }}
              htmlFor="watches-category"
              className="fs-medium-small m-left-smallest grey"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="filter-heading fs-medium-small">Rating</div>
      <div className="flex-al-center filter-item slider-container">
        <input type="range" min="0" max="5" value="3" className="slider-inp" />
        <span className="slider-value m-left-smallest">0</span>
      </div>
      <button
        type="submit"
        className="btn btn-round btn-outline-primary clear-btn m-top-medium"
      >
        Clear Filters
      </button>
    </div>
  );
};
