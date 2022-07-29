import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      localStorage.removeItem('persist:root');
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} = userSlice.actions;
export default userSlice.reducer;
