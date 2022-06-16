import axios from 'axios';
import { useLocalStorageGetItem } from '../../CustomHooks/CustomHooks';

export function AddToCart(data) {
  const userToken = useLocalStorageGetItem('user-token');

  return axios.post(
    '/api/user/cart',
    { product: data },
    {
      headers: {
        authorization: userToken,
      },
    }
  );
}
