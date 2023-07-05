// import axios from 'axios';

import { takeLatest } from 'redux-saga/effects';
import { addToFavoriteTrip } from './reducer';

export function* addToFavoriteTripAsync({ payload }) {
  try {
    yield console.log(payload, 'saga');
  } catch (error) {
    console.log(error);
  }
}

export const homePageSaga = [
  takeLatest(addToFavoriteTrip.type, addToFavoriteTripAsync),
];
