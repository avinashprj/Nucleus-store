import axios from 'axios';

export const getOrders = async (authToken) => {
  try {
    const response = await axios.get('/api/user/orders', {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    }
    throw new Error();
  } catch (e) {
    console.error('getOrdersFromServer : Error in fetching order history', e);
  }
};
