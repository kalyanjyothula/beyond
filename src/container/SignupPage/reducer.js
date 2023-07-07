import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registration: {},
};

const signupReducer = createSlice({
  name: 'signupPage',
  initialState: initialState,
  reducers: {
    createAccount(state, { payload }) {
      return { ...state, registration: payload };
    },
  },
});

export const { createAccount } = signupReducer.actions;

export const signupPageSelector = (state) => state.signupPage;

export default signupReducer.reducer;
