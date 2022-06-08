import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2, BsPerson } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { pageLinks } from './navbar.data';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import { Sidebar } from '../Sidebar/Sidebar';
import { Cart } from '../Cart/Cart';

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);
  const [toggleCartModal, setToggleCartModal] = React.useState(false);
  const searchBarModalRef = React.useRef(null);
  useCloseOnClickOutside(searchBarModalRef, setToggleSearchModal);
  // note: modal outside click end

  return (
    <nav className="navbar flex-nav">
      <div className="nav-left flex-al-center">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          type="submit"
          id="btnHamburger"
          href="#"
          className={`nav-toggle hide-for-desktop m-right-small border-none ${
            showSidebar ? 'open' : ''
          }`}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="nav-logo">
          Nucleus
        </Link>
      </div>
      <ul className="nav-links flex-al-center">
        {pageLinks.map((singleLink) => (
          <li key={singleLink?.id}>
            <Link
              style={{ textTransform: 'capitalize' }}
              to={singleLink?.route?.toLowerCase()}
              className="link nav-link m-right-small"
            >
              {singleLink?.page}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-right flex-al-center">
        {/* Note: Desktop search bar */}
        <form className="search-bar-center-desktop flex-al-center m-right-small">
          <input
            className="flex-al-center"
            placeholder="Search for Products Here"
          />
          <button className="flex-al-center" type="submit">
            <IoIosSearch className="nav-icons flex" />
          </button>
        </form>
        {/* Note: Desktop search bar END */}
        <button
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
              >
                <FiX className="nav-icons" />
              </button>
            </div>
            <form className="search-bar-center flex-al-center">
              <input placeholder="Search for Products Here" />
              <button type="submit">
                <IoIosSearch className="nav-icons " />
              </button>
            </form>
          </div>
        </div>
        <Link className="flex-al-center" to="/wishlist">
          <AiOutlineHeart className="nav-icons m-right-small" />
        </Link>
        <button
          type="submit"
          onClick={() => setToggleCartModal(!toggleCartModal)}
          className="flex-al-center toggle-cart m-right-small border-none"
          href="#"
        >
          <BsCart2 className="nav-icons" />
        </button>
        <a href="./login.html" className="flex-al-center border-none">
          <BsPerson className="nav-icons" />
        </a>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Cart
        toggleCartModal={toggleCartModal}
        setToggleCartModal={setToggleCartModal}
      />
    </nav>
  );
};
