import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { pageLinks } from './navbar.data';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import { Sidebar } from '../Sidebar/Sidebar';
import { Cart } from '../Cart/Cart';
import { logOutUser, useAuthContext } from '../../store/Context/AuthContext';
import { useCartContext } from '../../store/Context/CartContext';
import { useWishlistContext } from '../../store/Context/WishlistContext';

export const Navbar = () => {
  const { login, setUser, setLogin } = useAuthContext();
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);
  const searchBarModalRef = React.useRef(null);
  const navRef = React.useRef(null);
  useCloseOnClickOutside(searchBarModalRef, setToggleSearchModal);
  return (
    <nav ref={navRef} className="navbar flex-nav">
      <div className="nav-left flex-al-center">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          type="submit"
          id="btnHamburger"
          href="#"
          aria-label="menu-icon"
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
          <button
            aria-label="search-icon"
            className="flex-al-center"
            type="submit"
          >
            <IoIosSearch className="nav-icons flex" />
          </button>
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
            <form className="search-bar-center flex-al-center">
              <input placeholder="Search for Products Here" />
              <button aria-label="search-icon" type="submit">
                <IoIosSearch className="nav-icons " />
              </button>
            </form>
          </div>
        </div>
        <Link className="flex-al-center navbar-wishlist" to="/wishlist">
          <AiOutlineHeart className="nav-icons m-right-small" />
          {wishlist?.length ? (
            <span className="nav-link-span wishlist-span">
              {wishlist?.length}
            </span>
          ) : null}
        </Link>
        <button
          aria-label="cart-icon"
          type="submit"
          onClick={() => setToggleCartModal(!toggleCartModal)}
          className="flex-al-center toggle-cart m-right-small border-none relative"
          href="#"
        >
          <BsCart2 className="nav-icons" />
          {cart?.length ? (
            <span className="nav-link-span cart-span">{cart?.length}</span>
          ) : null}
        </button>
        {login ? (
          <button
            aria-label="logout-icon"
            type="button"
            onClick={() => {
              logOutUser(setUser, setCart, setWishlist, setLogin, navigate);
            }}
            className="flex-al-center border-none logout-btn"
          >
            LOG OUT
          </button>
        ) : (
          <Link to="/login" className="flex-al-center border-none">
            <BsPerson className="nav-icons" />
          </Link>
        )}
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        navRef={navRef}
      />
      <Cart
        toggleCartModal={toggleCartModal}
        setToggleCartModal={setToggleCartModal}
      />
    </nav>
  );
};
