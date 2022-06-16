import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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

export const Cart = ({ toggleCartModal, setToggleCartModal }) => {
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
                      onClick={() =>
                        removeFromCart(product._id, {
                          onSuccess: ({ data: { cart: cartData } }) => {
                            toast.success('removed from cart');
                            setCart(cartData);
                          },
                          onError: (error) => {
                            toast.error(error.message);
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
                      onClick={() => {
                        removeFromCart(product._id, {
                          onSuccess: ({ data: { cart: cartData } }) => {
                            setCart(cartData);
                          },
                          onError: (error) => {
                            toast.error(error.message);
                          },
                        });
                        if (!isPresentInState(product, wishlist)) {
                          addToWishlist(product, {
                            onSuccess: ({
                              data: { wishlist: wishListData },
                            }) => {
                              toast.success('added to wishlist');
                              setWishlist(wishListData);
                            },
                            onError: (error) => {
                              toast.error(error.message);
                            },
                          });
                        } else {
                          toast.info('Already in Wishlist ');
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
                    <button
                      onClick={() => {
                        changeQuantityCart(
                          { product, type: 'increment' },
                          {
                            onSuccess: ({ data: { cart: cardData } }) => {
                              setCart(cardData);
                            },
                            onError: (error) => {
                              toast.error(error.message);
                            },
                          }
                        );
                      }}
                      type="button"
                      className="cart-item-increase-btn "
                      data-id={product.id}
                    >
                      <IoIosArrowUp className="link fs-medium" />
                    </button>
                    <p className="cart-item-amount" data-id={product.id}>
                      {product.qty}
                    </p>
                    <button
                      onClick={() => {
                        if (product.qty >= 2) {
                          changeQuantityCart(
                            { product, type: 'decrement' },
                            {
                              onSuccess: ({ data: { cart: cardData } }) => {
                                setCart(cardData);
                              },
                              onError: (error) => {
                                toast.error(error.message);
                              },
                            }
                          );
                        } else {
                          removeFromCart(product._id, {
                            onSuccess: ({ data: { cart: cartData } }) => {
                              setCart(cartData);
                            },
                            onError: (error) => {
                              toast.error(error.message);
                            },
                          });
                        }
                      }}
                      type="button"
                      className="cart-item-decrease-btn"
                      data-id="rec43w3ipXvP28vog"
                    >
                      <IoIosArrowDown className="link fs-medium" />
                    </button>
                  </div>
                </article>
              ))}
            {cart?.length === 0 && (
              <p className="center" style={{ marginTop: '4rem' }}>
                Add some products to the cart
              </p>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <Link to="/login">
              <button
                className="btn btn-squared"
                type="button"
                onClick={() => setToggleCartModal((prev) => !prev)}
              >
                <h3>PLEASE LOG IN FIRST</h3>
              </button>
            </Link>
          </div>
        )}
        {user.id ? (
          <footer>
            <h3 className="cart-total text-slanted">
              total: {cart && formatPrice(cartTotalPrice(cart))}
            </h3>
            <button
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
