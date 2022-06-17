import React from 'react';
import { toast } from 'react-toastify';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export const Counter = ({ product, setCart, changeQuantityCart }) => {
  const [value, setValue] = React.useState(product?.qty || 0);

  const handleIncrease = () => {
    setValue((prev) => prev + 1);
    changeQuantityCart(
      { product, type: 'increment' },
      {
        onSuccess: ({ data: { cart: cardData } }) => {
          setCart(cardData);
        },
        onError: (error) => {
          toast.error(error.message, { position: 'top-left' });
        },
      }
    );
  };

  const handleDecrease = () => {
    setValue((prev) => (prev === 1 ? prev : prev - 1));
    if (value !== 1) {
      changeQuantityCart(
        { product, type: 'decrement' },
        {
          onSuccess: ({ data: { cart: cardData } }) => {
            setCart(cardData);
          },
          onError: (error) => {
            toast.error(error.message, { position: 'top-left' });
          },
        }
      );
    } else {
      toast.error('Quantity cannot be negative', { position: 'top-left' });
    }
  };

  return (
    <div>
      <button
        onClick={() => handleIncrease()}
        type="button"
        className="cart-item-increase-btn "
        data-id={product.id}
      >
        <IoIosArrowUp className="link fs-medium" />
      </button>
      <p className="cart-item-amount" data-id={product.id}>
        {value}
      </p>
      <button
        onClick={() => handleDecrease()}
        type="button"
        className="cart-item-decrease-btn"
        data-id="rec43w3ipXvP28vog"
      >
        <IoIosArrowDown className="link fs-medium" />
      </button>
    </div>
  );
};
