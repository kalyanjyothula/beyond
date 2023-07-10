import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import {
  createAccount,
  createAccountFail,
  createAccountSuccess,
} from './reducer';

export function* createAccountAsync({ payload }) {
  try {
    const url = '/api/user/register';
    const {
      data: { success, _id, mobile, email, token },
    } = yield call(axios, { method: 'POST', data: payload, url });
    if (success) {
      yield put(
        createAccountSuccess({
          id: _id,
          mobile: mobile,
          email: email,
          token: token,
        }),
      );
      yield window.location.href='/'
    } else yield put(createAccountFail());
  } catch (error) {
    console.log(error);
    yield createAccountFail();
  }
}

export const signupPageSaga = [
  takeLatest(createAccount.type, createAccountAsync),
];
