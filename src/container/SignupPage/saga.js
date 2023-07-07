// import axios from 'axios';

import { takeLatest } from 'redux-saga/effects';
import { createAccount } from './reducer';

export function* createAccountAsync({ payload }) {
  try {
    yield console.log(payload, 'saga');
  } catch (error) {
    console.log(error);
  }
}

export const signupPageSaga = [
  takeLatest(createAccount.type, createAccountAsync),
];
