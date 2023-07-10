/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteTrips: [],
};

const homePageReducer = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    getFavoriteTrips(state, action) {
      console.log("called getFavoriteTrips");
    },
    getFavoriteTripsSuccess(state, { payload }) {
      return { ...state, favoriteTrips: [...payload.trips] };
    },
    getFavoriteTripsFail(state, { payload }) {
      return { ...state };
    },
    addToFavoriteTrip(state, { payload }) {
      if (!state.favoriteTrips.includes(payload)) {
        state.favoriteTrips.push(payload);
        return state;
      } else {
        const fav = state.favoriteTrips.filter((ele) => ele !== payload);
        return { ...state, favoriteTrips: [...fav] };
      }
    },
  },
});

export const {
  addToFavoriteTrip,
  getFavoriteTrips,
  getFavoriteTripsFail,
  getFavoriteTripsSuccess,
} = homePageReducer.actions;

export const homePageSelector = (state) => state.homePage; // name of the reducer in store

export default homePageReducer.reducer;
