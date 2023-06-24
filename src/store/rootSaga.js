import { all } from 'redux-saga/effects';
import { AppSaga } from '../container/App/saga';

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([...AppSaga]);
  // yield takeLatest(getUser.type, getUserSaga);
}
