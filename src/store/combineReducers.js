import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../container/App/reducer';

export const reducer = combineReducers({
  user: userReducer,
});
