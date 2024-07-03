import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div>
      {cart && cart.items.map(item => (
        <div key={item._id}>
          <h2>{item.product.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
