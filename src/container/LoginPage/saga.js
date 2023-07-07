// import axios from 'axios';

import { takeLatest } from 'redux-saga/effects';
import { userLogin } from './reducer';

export function* userLoginAsync({ payload }) {
  try {
    yield console.log(payload, 'saga');
  } catch (error) {
    console.log(error);
  }
}

export const loginPageSaga = [takeLatest(userLogin.type, userLoginAsync)];
