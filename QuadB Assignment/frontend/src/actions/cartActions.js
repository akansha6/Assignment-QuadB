import axios from 'axios';

export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart');
    dispatch({ type: 'GET_CART', payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const addToCart = item => async dispatch => {
  try {
    const res = await axios.post('/api/cart', item);
    dispatch({ type: 'ADD_TO_CART', payload: res.data });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const removeFromCart = id => async dispatch => {
  try {
    await axios.delete(`/api/cart/${id}`);
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  } catch (err) {
    console.error(err.response.data);
  }
};
