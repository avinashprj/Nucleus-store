import axios from 'axios';
import { toast } from 'react-toastify';

export const addOrders = async (authToken, order) => {
  try {
    const response = await axios.post(
      '/api/user/orders',
      { order },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      toast.success('Order placed successfully');
      return response.data;
    }
    throw new Error();
  } catch (e) {
    toast.error("Couldn't place order! Please try again.");
    console.error('addToOrdersInServer : Error in placing order', e);
  }
};
