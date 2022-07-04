import React from 'react';
import { toast } from 'react-toastify';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useMotionAnimate } from 'motion-hooks';

export const Counter = ({ product, setCart, changeQuantityCart }) => {
  const counterRef = React.useRef(null);
  const [value, setValue] = React.useState(product?.qty || 0);
  const { play: playIncrease } = useMotionAnimate(
    counterRef,
    { y: [5, 20, -10, 0], opacity: [1, 0, 0, 1] },
    { duration: 0.5 }
  );

  const { play: playDecrease } = useMotionAnimate(
    counterRef,
    { y: [0, -10, 20, 0], opacity: [1, 0, 0, 1] },
    { duration: 0.5 }
  );

  const handleIncrease = () => {
    playIncrease();
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 100);
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
    playDecrease();
    setTimeout(() => {
      setValue((prev) => (prev === 1 ? prev : prev - 1));
    }, 100);

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
        aria-label="increase-icon"
        onClick={() => handleIncrease()}
        type="button"
        className="cart-item-increase-btn "
        data-id={product.id}
      >
        <IoIosArrowUp className="link fs-medium" />
      </button>
      <p ref={counterRef} className="cart-item-amount" data-id={product.id}>
        {value}
      </p>
      <button
        aria-label="decrease-icon"
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
