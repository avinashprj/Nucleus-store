import axios from 'axios';

export const FetchWishlist = (encodedToken) =>
  axios.get('/api/user/wishlist', {
    headers: {
      authorization: encodedToken,
    },
  });
