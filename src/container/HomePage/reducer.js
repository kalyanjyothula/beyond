import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteTrips: [],
};

const homePageReducer = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {
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

export const { addToFavoriteTrip } = homePageReducer.actions;

export const homePageSelector = (state) => state.homePage; // name of the homePageReducer

export default homePageReducer.reducer;
