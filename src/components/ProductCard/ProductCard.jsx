import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { BsFillHeartFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';
import { useAddToCart, useCartContext } from '../../store/Context/CartContext';
import { useAuthContext } from '../../store/Context/AuthContext';
import { isPresentInState } from '../../utils/utils';
/* eslint-disable no-nested-ternary */
export const ProductCard = ({ singleProduct, children }) => {
  const { user } = useAuthContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const { cart, setCart, setToggleCartModal } = useCartContext();
  const { mutate: addToWishlist, isLoading: isLoadingWishlist } =
    useAddToWishlist();
  const { mutate: removeFromWishlist, isLoading: isDeletingWishlist } =
    useDeleteFromWishlist();
  const { mutate: addToCart, isLoading: isLoadingCart } = useAddToCart();
  const ratingsArray = [];
  for (let i = 1; i <= singleProduct.starRating; i += 1) {
    ratingsArray.push({
      icon: <GiRoundStar key={i} className=" fs-small added " />,
    });
  }

  return (
    <article className="card card-product">
      <span className="card-discount">
        you save {singleProduct.productDiscpercent}%
      </span>
      {user.id ? (
        isPresentInState(singleProduct, wishlist) ? (
          <button
            disabled={isDeletingWishlist}
            onClick={() => {
              removeFromWishlist(singleProduct, {
                onSuccess: ({ data: { wishlist: wishlistData } }) => {
                  setWishlist(wishlistData);
                },
                onError: () => {
                  toast.error('error');
                },
              });
            }}
            type="submit"
            className="card-wishlist border-none"
          >
            <BsFillHeartFill className="icon-svg card-heart added" />
          </button>
        ) : (
          <button
            disabled={isLoadingWishlist}
            onClick={() =>
              addToWishlist(singleProduct, {
                onSuccess: ({ data: { wishlist: wishlistData } }) => {
                  setWishlist(wishlistData);
                },
              })
            }
            type="submit"
            className="card-wishlist border-none"
          >
            <BsFillHeartFill className={`icon-svg card-heart `} />
          </button>
        )
      ) : (
        <Link
          aria-label="login-icon"
          to="/login"
          className="card-wishlist border-none"
        >
          <button
            className="border-none"
            onClick={() => toast.info('Please Log In First')}
            type="button"
          >
            <BsFillHeartFill className={`icon-svg card-heart `} />
          </button>
        </Link>
      )}

      <div className="card-img">
        <img src={singleProduct.imgUrl} alt={singleProduct.alt} />
        <Link
          aria-label="go-to-singleProduct"
          to={`/products/${singleProduct._id}`}
          className="card-img-overlay"
        >
          <div className="card-img-overlay-symbol">
            <BiSearchAlt className="icon-link" />
          </div>
        </Link>
      </div>

      <div className="card-details p-smaller">
        <div className="card-stars flex-al-center">
          {ratingsArray.map((item) => item.icon)}
          <span className="card-review m-left-smallest">
            {singleProduct.reviews} Reviews
          </span>
        </div>
        <div className="card-title m-bottom-smaller">
          {singleProduct.productTitle}
        </div>
        <div className="card-price">
          Rs. {singleProduct.productPrice}
          <span className="m-left-small">
            Rs.{singleProduct.productOgPrice}
          </span>
        </div>
        <div className="card-desc">
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            1.54 inch display
          </p>
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            Temperature Monitoring
          </p>
          <p className="m-bottom-smaller">
            <span>
              <i className="fas fa-square m-right-smallest" />
            </span>
            100+ cloud watch faces
          </p>
        </div>
        {user.id ? (
          isPresentInState(singleProduct, cart) ? (
            <button
              onClick={() => setToggleCartModal((prev) => !prev)}
              type="button"
              className="btn btn-squared m-top-small"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() =>
                addToCart(singleProduct, {
                  onSuccess: ({ data: { cart: cartData } }) => {
                    setCart(cartData);
                  },
                  onError: (error) => {
                    toast.error(error.message);
                  },
                })
              }
              disabled={isLoadingCart}
              type="submit"
              className="btn btn-squared m-top-small"
            >
              {children || 'Add to Cart'}
            </button>
          )
        ) : (
          <Link to="/login" className="">
            <button
              onClick={() => toast.info('Please Log In First')}
              type="submit"
              className="btn btn-squared m-top-small"
            >
              Add to Cart
            </button>
          </Link>
        )}
      </div>
    </article>
  );
};
