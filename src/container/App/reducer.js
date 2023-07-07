import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'app',
  initialState: {
    userData: '',
  },
  reducers: {
    getUser() {},
    setUser(state, action) {
      const userData = action.payload;
      return { ...state, ...userData };
    },
    googleLoginInfo(state, { payload }) {
      return { ...state, googleLoginInfo: payload };
    },
  },
});

export const { getUser, setUser, googleLoginInfo } = userReducer.actions;

export const appSelector = (state) => state.app;

export default userReducer.reducer;
