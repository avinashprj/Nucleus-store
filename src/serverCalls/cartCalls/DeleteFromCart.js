import axios from 'axios';
import { useLocalStorageGetItem } from '../../CustomHooks/CustomHooks';

export async function DeleteFromCart(productID) {
  const userToken = useLocalStorageGetItem('user-token');
  return axios.delete(`/api/user/cart/${productID}`, {
    headers: {
      authorization: userToken,
    },
  });
}
