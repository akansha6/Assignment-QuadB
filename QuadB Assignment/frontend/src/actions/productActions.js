import axios from 'axios';

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: 'GET_PRODUCTS', payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({ type: 'GET_PRODUCT', payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};
