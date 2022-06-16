import axios from 'axios';

export const FetchCart = (encodedToken) =>
  axios.get('/api/user/cart', {
    headers: {
      authorization: encodedToken,
    },
  });
