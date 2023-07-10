/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registration: {},
};

const signupReducer = createSlice({
  name: 'signupPage',
  initialState: initialState,
  reducers: {
    createAccount(state, { payload }) {
      return { ...state, registration: payload, loading: true };
    },
    createAccountSuccess(state, { payload }) {
      return { ...state, loading: false, userInfo: payload };
    },
    createAccountFail(state, { payload }) {
      return { ...state, loading: false };
    },
  },
});

export const { createAccount, createAccountSuccess, createAccountFail } =
  signupReducer.actions;

export const signupPageSelector = (state) => state.signupPage;

export default signupReducer.reducer;
