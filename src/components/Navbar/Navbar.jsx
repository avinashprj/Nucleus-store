import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { admin, pageLinks } from './navbar.data';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import { Sidebar } from '../Sidebar/Sidebar';
import { Cart } from '../Cart/Cart';
import { logOutUser, useAuthContext } from '../../store/Context/AuthContext';
import { useCartContext } from '../../store/Context/CartContext';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { SearchBar } from '../SearchBar/SearchBar';

export const Navbar = () => {
  const { login, setUser, setLogin, user } = useAuthContext();
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);

  const navRef = React.useRef(null);

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
        {user.id === admin._id && (
          <li>
            <Link
              style={{ textTransform: 'capitalize' }}
              to="upload"
              className="link nav-link m-right-small"
            >
              Upload
            </Link>
          </li>
        )}
      </ul>
      <div className="nav-right flex-al-center">
        {/* Note: Desktop search bar */}
        <SearchBar
          setToggleSearchModal={setToggleSearchModal}
          toggleSearchModal={toggleSearchModal}
        />

        <Link
          aria-label="wishlist"
          className="flex-al-center navbar-wishlist"
          to="/wishlist"
        >
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
          <Link
            aria-label="login-icon"
            to="/login"
            className="flex-al-center border-none"
          >
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
