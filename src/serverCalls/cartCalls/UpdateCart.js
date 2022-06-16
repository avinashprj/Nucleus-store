import axios from 'axios';
import { useLocalStorageGetItem } from '../../CustomHooks/CustomHooks';

export const UpdateCart = ({ product, type }) => {
  const userToken = useLocalStorageGetItem('user-token');
  return axios.post(
    `/api/user/cart/${product._id}`,
    {
      action: {
        type,
      },
    },
    {
      headers: {
        authorization: userToken,
      },
    }
  );
};
