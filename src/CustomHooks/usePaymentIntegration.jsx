import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartTotalPrice } from '../utils/utils';
import { addOrders } from '../serverCalls/orderCalls/addOrders';
import { useAuthContext } from '../store/Context/AuthContext';
import { useCartContext } from '../store/Context/CartContext';
import { clearCart } from '../serverCalls/cartCalls/clearCart';

function usePaymentIntegration() {
  const navigate = useNavigate();
  const { cart, setCart, setToggleCartModal } = useCartContext();
  const { user, userToken } = useAuthContext();

  const paymentSuccessful = async (rzpResponse) => {
    const response = await clearCart(userToken);
    setCart([]);
    // response = await addOrders(userToken, {
    //   items: cart,
    //   paymentId: rzpResponse.razorpay_payment_id,
    //   totalPrice: cartTotalPrice(cart),
    //   deliveryAddress: 'Tardeo tulsiwadi mumbai 400034',
    // });

    toast.success('Placed Order SuccessFully');
    setToggleCartModal((prev) => !prev);
    navigate('/');
  };

  const loadScript = async (url) =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });

  const displayRazorpay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      toast.error('Please check your internet connection');
      return;
    }
    const options = {
      key: process.env.REACT_APP_RZP_KEY,
      amount: cartTotalPrice(cart) * 100,
      currency: 'INR',
      name: 'Nucleus Store',
      description: 'Thank you for shopping with us',
      image: 'https://i.ibb.co/CzmZDzk/Screenshot-2022-06-16-at-7-50-34-PM.png',
      handler(response) {
        paymentSuccessful(response);
      },
      prefill: {
        name: `Avinash Prajapati`,
        email: `avinashprajapati914@gmail.com`,
        contact: 8850094860,
      },
      theme: {
        color: '#1d4ed8',
      },
      notes: {
        address: `Tardeo tulsiwadi mumbai 400034`,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', (response) => {
      toast.error('Something went wrong! Please try again later');
    });
    paymentObject.open();
  };

  return { paymentSuccessful, loadScript, displayRazorpay };
}

export { usePaymentIntegration };
