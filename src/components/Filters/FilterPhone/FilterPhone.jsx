import React from 'react';
import { useCloseOnClickOutside } from '../../../CustomHooks/CustomHooks';
import { filtersData, sortsData } from '../Filters.data';

export const FilterPhone = () => {
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
        </div>
      </aside>

      {/* <!-- note: Filter CONTAINER --> */}
      <aside
        className={`filter-outer-container ${toggleFilterModal ? 'show' : ''}`}
      >
        <div ref={toggleFilterModalRef} className="filter-inner-container">
          <div className="grid-2 flex-base flex-column">
            <div className="filter-heading fs-medium">Filter</div>
            <div className="divider" />
            <div className="phone-filter-container m-left-smallest">
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
          </div>
          <div className="grid-2 flex-base flex-column">
            <div className="filter-heading fs-medium">Colors</div>
            <div className="divider" />
            <div className="phone-filter-container m-left-smallest">
              {filtersData?.color?.map((category) => (
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
          </div>
        </div>
      </aside>
    </>
  );
};
