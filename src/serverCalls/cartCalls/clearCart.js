import axios from 'axios';

export const clearCart = async (authorization) => {
  try {
    const response = await axios.delete('/api/user/cart/all', {
      headers: { authorization },
    });
    if (response.status === 200) {
      return response.data;
    }
    throw new Error();
  } catch (e) {
    console.error('clearCartInServer : Error in clearing Cart', e);
  }
};
