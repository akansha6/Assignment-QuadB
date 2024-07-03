import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(getProductById(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
