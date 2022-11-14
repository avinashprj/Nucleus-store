import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import {
  useCloseOnClickOutside,
  useInput,
} from '../../CustomHooks/CustomHooks';
import { useProductContext } from '../../store/index.store';
import { useSearchContext } from '../../store/Context/SearchContext';

export const SearchBar = ({ setToggleSearchModal, toggleSearchModal }) => {
  const navigate = useNavigate();
  const searchBarModalRef = React.useRef(null);
  useCloseOnClickOutside(searchBarModalRef, setToggleSearchModal);
  const {
    inputState: { searchText },
    inputUpdate,
    setInputState,
  } = useInput({
    searchText: '',
  });

  const {
    productCurrentState: { productsList },
  } = useProductContext();
  const { setSearchResult, searchResult } = useSearchContext();

  const timerId = React.useRef(null);
  React.useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (searchText)
        setSearchResult(
          productsList.filter((word) =>
            word.productTitle
              .toLowerCase()
              .includes(searchText.trim().toLowerCase())
          )
        );
      else setSearchResult([]);
    }, 200);

    return () => clearTimeout(timerId.current);
  }, [productsList, searchText, setSearchResult]);

  const searchHandler = (e) => {
    if (e) e.preventDefault();
    if (searchText.trim().length > 0) {
      setInputState({ searchText: '' });
      navigate({
        pathname: '/products',
        search: `query=${searchText.trim()}`,
      });
    }
  };
  return (
    <>
      <form
        onSubmit={searchHandler}
        className="search-bar-center-desktop flex-al-center m-right-small"
      >
        <input
          className="flex-al-center"
          placeholder="Search for Products Here"
          onChange={inputUpdate}
          value={searchText}
          name="searchText"
          autoComplete="off"
        />
        <button
          aria-label="search-icon"
          className="flex-al-center"
          type="submit"
        >
          <IoIosSearch className="nav-icons flex" />
        </button>
        <div className="suggestions">
          {searchResult.length > 0
            ? searchResult.slice(0, 5).map((singleProduct) => (
                <Link
                  key={singleProduct._id}
                  className="suggestion"
                  aria-label="go-to-singleProduct"
                  to={`/products/${singleProduct._id}`}
                  onClick={() => setInputState({ searchText: '' })}
                >
                  {singleProduct.productTitle}
                </Link>
              ))
            : searchText && (
                <div className="suggestion">{`No results found for ${searchText}`}</div>
              )}
        </div>
      </form>
      {/* Note: Desktop search bar END */}
      <button
        aria-label="search-icon"
        onClick={() => setToggleSearchModal(!toggleSearchModal)}
        type="submit"
        className="flex-al-center search-symbol-mobile border-none"
        href="#"
      >
        <IoIosSearch className="nav-icons m-right-small" />
      </button>
      <div className={`search-bar-modal ${toggleSearchModal ? 'open' : ''}`}>
        <div
          ref={searchBarModalRef}
          className={`search-bar ${toggleSearchModal ? 'open' : ''}`}
        >
          <div className="search-bar-heading flex-nav">
            <span>What are you looking for?</span>
            <button
              onClick={() => setToggleSearchModal(!toggleSearchModal)}
              type="submit"
              className="border-none"
              id="search-close"
              aria-label="cross-icon"
            >
              <FiX className="nav-icons" />
            </button>
          </div>
          <form
            onSubmit={(e) => {
              setToggleSearchModal(!toggleSearchModal);
              searchHandler(e);
            }}
            className="search-bar-center flex-al-center"
          >
            <input
              placeholder="Search for Products Here"
              name="searchText"
              onChange={inputUpdate}
              value={searchText}
            />
            <button aria-label="search-icon" type="submit">
              <IoIosSearch className="nav-icons " />
            </button>
            <div className="suggestions-mobile">
              {searchResult.length > 0
                ? searchResult.slice(0, 5).map((singleProduct) => (
                    <Link
                      key={singleProduct._id}
                      className="suggestion-mobile"
                      aria-label="go-to-singleProduct"
                      to={`/products/${singleProduct._id}`}
                      onClick={() => {
                        setInputState({ searchText: '' });
                        setToggleSearchModal(!toggleSearchModal);
                      }}
                    >
                      {singleProduct.productTitle}
                    </Link>
                  ))
                : searchText && (
                    <div className="suggestion">{`No results found for ${searchText}`}</div>
                  )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
