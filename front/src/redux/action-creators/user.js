import axios from 'axios';
import {
  FETCH_ORDERS_ADMIN,
  UPDATE_ORDERS,
  UPDATE_USER,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  CREATE_CATEGORY,
  CREATE_PRODUCT,
  DELETE_USER,
  EDIT_CATEGORY,
  LOGIN_SUCCESS,
} from '../constants';

export const logginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user: user,
});

const getOrders = orders => ({
  type: FETCH_ORDERS_ADMIN,
  orders,
});

const deleteCategory = id => ({
  type: REMOVE_CATEGORY,
  id,
});

const putOrders = order => ({
  type: UPDATE_ORDERS,
  order,
});

const putUser = user => ({
  type: UPDATE_USER,
  user,
});

const addCategory = category => ({
  type: ADD_CATEGORY,
  category,
});

const createCategory = category => ({
  type: CREATE_CATEGORY,
  category,
});

const postProduct = product => ({
  type: CREATE_PRODUCT,
  product,
});

const deleteUser = user => ({
  type: DELETE_USER,
  user,
});

const editCategory = category => ({
  type: EDIT_CATEGORY,
  category,
});

export const fetchOrders = () => dispatch =>
  axios
    .get('/api/ventas')
    .then(res => res.data)
    .then(orders => dispatch(getOrders(orders)));

export const removeCategory = categoryId => dispatch =>
  axios
    .delete(`/api/category/${categoryId}`)
    .then(res => res.data)
    .then(id => dispatch(deleteCategory(id)));

export const updateOrders = (orderId, order) => dispatch =>
  axios
    .put(`/api/ventas/${orderId}`, order)
    .then(res => res.data)
    .then(order => dispatch(putOrders(order)));

export const updateUser = (userId, user) => dispatch =>
  axios
    .put(`/api/users/${userId}`, user)
    .then(res => res.data)
    .then(user => dispatch(putUser(user)));

export const addProduct = producto => dispatch =>
  axios
    .post('/api/productos', producto)
    .then(res => res.data)
    .then(data => dispatch(postProduct(data)));
