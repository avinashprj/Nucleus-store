import React from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useProductContext } from '../../store/index.store';
import { NoProductsFound } from '../../components/index';
import { useAddToCart, useCartContext } from '../../store/Context/CartContext';
import { isPresentInState } from '../../utils/utils';
import { useAuthContext } from '../../store/Context/AuthContext';
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';

export const SingleProduct = () => {
  const { productID } = useParams();
  const { productCurrentState } = useProductContext();
  const singleProduct = productCurrentState?.productsList?.find(
    (product) => product._id === productID
  );
  const { mutate: addToCart, isLoading: isLoadingCart } = useAddToCart();
  const { user } = useAuthContext();
  const { cart, setCart, setToggleCartModal } = useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const { mutate: addToWishlist, isLoading: isLoadingWishlist } =
    useAddToWishlist();
  const { mutate: removeFromWishlist, isLoading: isDeletingWishlist } =
    useDeleteFromWishlist();

  if (!singleProduct) {
    return <NoProductsFound />;
  }

  return (
    <main>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            Home <span className="title-slash">/</span>
            {singleProduct?.productTitle}
          </h3>
        </div>
      </section>
      <section className="single-product">
        <div className="section-center single-product-center">
          <img
            src={singleProduct?.imgUrl}
            className="single-product-img img"
            alt=""
          />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">
                {singleProduct?.productTitle}
              </h2>
              <p className="single-product-company text-slanted">{`by ${singleProduct?.brand}`}</p>
              <p className="single-product-price">
                ₹{singleProduct?.productPrice}
              </p>
              <div className="single-product-colors" />
              <p className="single-product-desc">
                {singleProduct?.productDesc}
              </p>

              <div className="single-product-btns flex-al-center">
                {user.id ? (
                  isPresentInState(singleProduct, cart) ? (
                    <button
                      onClick={() => setToggleCartModal((prev) => !prev)}
                      type="button"
                      className="btn btn-squared "
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
                      className="btn btn-squared "
                    >
                      Add to Cart
                    </button>
                  )
                ) : (
                  <Link to="/login" className="">
                    <button
                      onClick={() => toast.info('Please Log In First')}
                      type="submit"
                      className="btn btn-squared "
                    >
                      Add to Cart
                    </button>
                  </Link>
                )}

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
                      className="wishlist-btn btn btn-squared btn-outline-secondary m-left-small"
                    >
                      <AiFillHeart className="icon-svg added" />
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
                      className="wishlist-btn btn btn-squared btn-outline-secondary m-left-small"
                    >
                      <AiOutlineHeart className="icon-svg  card-white" />
                    </button>
                  )
                ) : (
                  <Link
                    to="/login"
                    className="wishlist-btn btn btn-squared btn-outline-secondary m-left-small"
                  >
                    <button
                      className="border-none"
                      onClick={() => toast.info('Please Log In First')}
                      type="button"
                    >
                      <AiOutlineHeart className={`icon-svg card-white `} />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
