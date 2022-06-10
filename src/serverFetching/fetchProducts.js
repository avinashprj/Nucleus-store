import axios from 'axios';

const fetchProducts = () => axios.get('/api/products');
export { fetchProducts };
