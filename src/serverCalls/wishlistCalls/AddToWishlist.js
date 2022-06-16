import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocalStorageGetItem } from '../../CustomHooks/CustomHooks';

export function AddToWishlist(data) {
  const userToken = useLocalStorageGetItem('user-token');
  try {
    const res = axios.post(
      '/api/user/wishlist',
      { product: data },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    return res;
  } catch (error) {
    toast.error(`${error.message}`);
  }
}
