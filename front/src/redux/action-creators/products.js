import {
  FETCH_SINGLE_PRODUCT,
  FETCH_PRODUCTS_USER,
  DELETE_PRODUCT,
} from '../constants';
import axios from 'axios';

export const fetchSingleProduct = product => ({
  type: FETCH_SINGLE_PRODUCT,
  product,
});

export const fetchProductsUser = products => ({
  type: FETCH_PRODUCTS_USER,
  products,
});

export const getProducts = () => {
  return dispatch =>
    axios
      .get('/api/productos')
      .then(res => dispatch(fetchProductsUser(res.data)));
};

export const getSingleProduct = idProducto => {
  return dispatch =>
    axios
      .get(`/api/productos/${idProducto}`)
      .then(res => dispatch(fetchSingleProduct(res.data)));
};

export const deleteProduct = productId => {
  return dispatch =>
    axios
      .delete(`/api/productos/${productId}`)
      .then(res => res.data)
      .then(producto =>
        dispatch({
          type: DELETE_PRODUCT,
          productId,
        }),
      );
};
