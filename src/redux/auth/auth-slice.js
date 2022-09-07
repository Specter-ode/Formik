import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: store => ({ ...store, loading: true, error: null }),
    [register.fulfilled]: (_, { payload }) => ({
      users: payload.user,
      token: payload.token,
      loading: false,
      isLogin: true,
    }),
    [register.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [login.pending]: store => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (_, { payload }) => ({
      users: payload.user,
      token: payload.token,
      loading: false,
      isLogin: true,
    }),
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [logout.pending]: store => ({ ...store, loading: true, error: null }),
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [getCurrentUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      return { ...store, users: payload, loading: false, isLogin: true };
    },
    [getCurrentUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;
