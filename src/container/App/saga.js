import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInfo, getUserInfoFail, setUserInfo } from "./reducer";
import axios from "axios";

export function* getUserSaga() {
  try {
    const url = "/api/user/getMe";
    const {
      data: { success, mobile, email, token, id },
    } = yield call(axios, { method: "GET", url });
    if (success) {
      yield put(
        setUserInfo({ mobile: mobile, email: email, token: token, id: id })
      );
    } else yield put(getUserInfoFail());
  } catch (error) {
    console.log(error);
    yield put(getUserInfoFail());
  }
}

export const AppSaga = [takeLatest(getUserInfo.type, getUserSaga)];
