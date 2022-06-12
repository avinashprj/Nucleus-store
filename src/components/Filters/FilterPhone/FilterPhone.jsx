import React from 'react';
import { useCloseOnClickOutside } from '../../../CustomHooks/CustomHooks';
import {
  dispatchSort,
  dispatchFilterProperties,
} from '../../../store/Reducer/Reducer';
import { filtersData, sortsData } from '../Filters.data';
import { isChecked } from '../../../utils/utils';

export const FilterPhone = ({ productState, dispatch }) => {
  const [toggleSortModal, setToggleSortModal] = React.useState(false);
  const [toggleFilterModal, setToggleFilterModal] = React.useState(false);
  const toggleSortModalRef = React.useRef();
  const toggleFilterModalRef = React.useRef();
  useCloseOnClickOutside(toggleSortModalRef, setToggleSortModal);
  useCloseOnClickOutside(toggleFilterModalRef, setToggleFilterModal);
  return (
    <>
      <aside>
        <div className="phone-filter flex-al-center">
          <button
            onClick={() => setToggleSortModal(!toggleSortModal)}
            type="submit"
            className="sort-btn phone-filter-btn border-none"
          >
            <i className="fa-solid fa-sort m-right-smallest" /> Sort
          </button>
          <button
            onClick={() => setToggleFilterModal(!toggleFilterModal)}
            type="submit"
            className="filter-btn phone-filter-btn border-none"
          >
            <i className="fa-solid fa-filter m-right-smallest" />
            Filter
          </button>
        </div>
      </aside>
      {/* <!-- note: SORT CONTAINER --> */}
      <aside
        className={`sort-outer-container ${toggleSortModal ? 'show' : ''}`}
      >
        <div ref={toggleSortModalRef} className="sort-inner-container">
          <div className="filter-heading fs-medium">Sort</div>
          <div className="divider" />
          <div className="sort-container m-left-smallest">
            {sortsData?.map((category) => (
              <div key={category} className="filter-item flex-al-center">
                <input
                  type="radio"
                  className="radio-inp"
                  id={category}
                  name="radio-group"
                  checked={
                    productState.sortBy && productState.sortBy === `${category}`
                  }
                  onChange={() => {
                    dispatchSort(dispatch, category);
                  }}
                />
                <label
                  style={{ textTransform: 'capitalize' }}
                  htmlFor={category}
                  className="fs-medium-small m-left-smallest grey"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* <!-- note: Filter CONTAINER --> */}
      <aside
        className={`filter-outer-container ${toggleFilterModal ? 'show' : ''}`}
      >
        <div ref={toggleFilterModalRef} className="filter-inner-container">
          {Object.keys(filtersData).map((property) => (
            <div key={property} className="grid-2 flex-base flex-column">
              <div className="filter-heading ">{property?.toUpperCase()}</div>
              <div className="divider" />
              <div className="phone-filter-container m-left-smallest">
                {filtersData[property].map((category) => (
                  <div key={category}>
                    <div key={category} className="filter-item flex-al-center">
                      <input
                        type="checkbox"
                        id={category}
                        name={category}
                        value={category}
                        className="checkbox pointer"
                        checked={isChecked(property, category, productState)}
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
        </div>
      </aside>
    </>
  );
};
