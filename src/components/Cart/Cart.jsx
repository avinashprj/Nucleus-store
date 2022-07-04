import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import {
  useCartContext,
  useDeleteFromCart,
  useUpdateCart,
} from '../../store/Context/CartContext';
import { useAuthContext } from '../../store/Context/AuthContext';
import {
  useAddToWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';
import {
  cartTotalPrice,
  formatPrice,
  isPresentInState,
} from '../../utils/utils';
import { usePaymentIntegration } from '../../CustomHooks/usePaymentIntegration';
import { Counter } from './sub-components/Counter';

export const Cart = ({ toggleCartModal, setToggleCartModal }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const cartRef = React.useRef(null);
  const { setCart, cart } = useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();

  const { mutate: removeFromCart, isLoading: isRemovingCart } =
    useDeleteFromCart();
  const { mutate: addToWishlist } = useAddToWishlist();

  const { mutate: changeQuantityCart } = useUpdateCart();

  const { displayRazorpay } = usePaymentIntegration();
  useCloseOnClickOutside(cartRef, setToggleCartModal);

  return (
    <aside className={`cart-overlay ${toggleCartModal ? 'show' : ''}`}>
      <aside ref={cartRef} className="cart">
        <button
          aria-label="close-icon"
          onClick={() => setToggleCartModal(!toggleCartModal)}
          type="submit"
          className="cart-close"
        >
          <FiX />
        </button>
        <h3 className="text-slanted center">Your Bag</h3>
        {user.id ? (
          <div className="cart-items">
            {cart?.length > 0 &&
              cart?.map((product) => (
                <article
                  key={product._id}
                  className="cart-item"
                  data-id={product._id}
                >
                  <img
                    src={product.imgUrl}
                    className="cart-item-img"
                    alt="high-back bench"
                  />
                  <div>
                    <h4 className="cart-item-name">{product.productTitle}</h4>
                    <p className="cart-item-price">₹{product.productPrice}</p>
                    <button
                      aria-label="remove-from-cart-icon"
                      onClick={() =>
                        removeFromCart(product._id, {
                          onSuccess: ({ data: { cart: cartData } }) => {
                            toast.success('removed from cart', {
                              position: 'top-left',
                            });
                            setCart(cartData);
                          },
                          onError: (error) => {
                            toast.error(error.message, {
                              position: 'top-left',
                            });
                          },
                        })
                      }
                      type="submit"
                      className="cart-item-remove-btn"
                      data-id={product.id}
                    >
                      Remove
                    </button>
                    <button
                      aria-label="add-cart-icon"
                      onClick={() => {
                        removeFromCart(product._id, {
                          onSuccess: ({ data: { cart: cartData } }) => {
                            setCart(cartData);
                          },
                          onError: (error) => {
                            toast.error(error.message, {
                              position: 'top-left',
                            });
                          },
                        });
                        if (!isPresentInState(product, wishlist)) {
                          addToWishlist(product, {
                            onSuccess: ({
                              data: { wishlist: wishListData },
                            }) => {
                              toast.success('added to wishlist', {
                                position: 'top-left',
                              });
                              setWishlist(wishListData);
                            },
                            onError: (error) => {
                              toast.error(error.message, {
                                position: 'top-left',
                              });
                            },
                          });
                        } else {
                          toast.info('Already in Wishlist', {
                            position: 'top-left',
                          });
                        }
                      }}
                      type="submit"
                      className="m-left-small cart-item-remove-btn"
                      data-id={product.id}
                    >
                      Wishlist
                    </button>
                  </div>
                  <div className="">
                    <Counter
                      product={product}
                      setCart={setCart}
                      changeQuantityCart={changeQuantityCart}
                      removeFromCart={removeFromCart}
                    />
                  </div>
                </article>
              ))}
            {cart?.length === 0 && (
              <div className="flex flex-column">
                <p className="center" style={{ marginTop: '4rem' }}>
                  Add some products to the cart
                </p>
                <button
                  aria-label="go-to-products"
                  onClick={() => {
                    setToggleCartModal((prev) => !prev);
                    navigate('/products');
                  }}
                  type="button"
                  className="btn btn-squared  m-top-medium"
                >
                  Products
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <Link to="/login">
              <button
                aria-label="log-in-redirect"
                className="btn btn-squared"
                type="button"
                onClick={() => setToggleCartModal((prev) => !prev)}
              >
                <h3>PLEASE LOG IN FIRST</h3>
              </button>
            </Link>
          </div>
        )}
        {user.id && cart?.length ? (
          <footer>
            <h3 className="cart-total text-slanted">
              total: {cart && formatPrice(cartTotalPrice(cart))}
            </h3>
            <button
              aria-label="checkout"
              onClick={() => {
                displayRazorpay();
              }}
              type="submit"
              className="cart-checkout btn btn-squared "
            >
              checkout
            </button>
          </footer>
        ) : null}
      </aside>
    </aside>
  );
};
