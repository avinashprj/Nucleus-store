import axios from 'axios';
import { useLocalStorageGetItem } from '../../CustomHooks/CustomHooks';

export function RemoveFromWishlist({ _id: productID }) {
  const userToken = useLocalStorageGetItem('user-token');

  return axios.delete(`/api/user/wishlist/${productID}`, {
    headers: {
      authorization: userToken,
    },
  });
}
