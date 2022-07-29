import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
} from './userRedux';

import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, user_id) => {
  dispatch(logout());
  try {
    // await axios.delete(`http://localhost:5000/api/auth/${user_id}`);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};
