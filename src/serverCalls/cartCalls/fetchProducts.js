import axios from 'axios';

const fetchProducts = async () => axios.get('/api/products');

export { fetchProducts };
