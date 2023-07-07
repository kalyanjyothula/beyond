import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loginPageReducer = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    userLogin(state, { payload }) {
      console.log(state, payload);
    },
  },
});

export const { userLogin } = loginPageReducer.actions;

export const loginSelector = (state) => state.login;

export default loginPageReducer.reducer;
