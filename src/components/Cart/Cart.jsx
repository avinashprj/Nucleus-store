import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';

import { products } from '../../backend/db/products';

export const Cart = ({ toggleCartModal, setToggleCartModal }) => {
  const cartRef = React.useRef(null);
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

        <h3 className="text-slanted">your bag</h3>

        {/* cart items */}
        <div className="cart-items">
          <article className="cart-item" data-id="rec43w3ipXvP28vog">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Mercury-1_540x.png?v=1639400857"
              className="cart-item-img"
              alt="high-back bench"
            />
            <div>
              <h4 className="cart-item-name">Smart Watch</h4>
              <p className="cart-item-price">₹749.25</p>
              <button
                type="submit"
                className="cart-item-remove-btn"
                data-id="rec43w3ipXvP28vog"
              >
                Remove
              </button>
              <button
                type="submit"
                className="m-left-small cart-item-remove-btn"
                data-id="rec43w3ipXvP28vog"
              >
                Wishlist
              </button>
            </div>
            <div className="">
              <button
                type="submit"
                className="cart-item-increase-btn "
                data-id="rec43w3ipXvP28vog"
              >
                <IoIosArrowUp className="link fs-medium" />
              </button>
              <p className="cart-item-amount" data-id="rec43w3ipXvP28vog">
                2
              </p>
              <button
                type="submit"
                className="cart-item-decrease-btn"
                data-id="rec43w3ipXvP28vog"
              >
                <IoIosArrowDown className="link fs-medium" />
              </button>
            </div>
          </article>
        </div>

        <div className="cart-items">
          {products.map((product) => (
            <article
              key={product.id}
              className="cart-item"
              data-id={product.id}
            >
              <img
                src={product.imgUrl}
                className="cart-item-img"
                alt="high-back bench"
              />
              <div>
                <h4 className="cart-item-name">{product.productTitle}</h4>
                <p className="cart-item-price">₹{product.productDiscpercent}</p>
                <button
                  type="submit"
                  className="cart-item-remove-btn"
                  data-id={product.id}
                >
                  Remove
                </button>
                <button
                  type="submit"
                  className="m-left-small cart-item-remove-btn"
                  data-id={product.id}
                >
                  Wishlist
                </button>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="cart-item-increase-btn "
                  data-id={product.id}
                >
                  <IoIosArrowUp className="link fs-medium" />
                </button>
                <p className="cart-item-amount" data-id={product.id}>
                  2
                </p>
                <button
                  type="submit"
                  className="cart-item-decrease-btn"
                  data-id="rec43w3ipXvP28vog"
                >
                  <IoIosArrowDown className="link fs-medium" />
                </button>
              </div>
            </article>
          ))}
        </div>
        {/* footer */}
        <footer>
          <h3 className="cart-total text-slanted">total : $12.99</h3>
          <button type="submit" className="cart-checkout btn btn-squared ">
            checkout
          </button>
        </footer>
      </aside>
    </aside>
  );
};
