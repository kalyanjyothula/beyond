import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'app',
  initialState: {
    userInfo: '',
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    getUserInfo(state) {
      return { ...state, loading: true, isAuthenticated: false };
    },
    getUserInfoFail(state) {
      return { ...state, loading: false, isAuthenticated: false}
    },
    setUserInfo(state, { payload }) {
      return { ...state, userInfo: payload, isAuthenticated: true, loading: false };
    },
    googleLoginInfo(state, { payload }) {
      return { ...state, googleLoginInfo: payload };
    },
  },
});

export const { getUserInfo, setUserInfo, googleLoginInfo, getUserInfoFail } =
  userReducer.actions;

export const appSelector = (state) => state.app;

export default userReducer.reducer;
