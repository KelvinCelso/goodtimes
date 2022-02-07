import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paid: null,
  visit: null,
  recommeded: null,
  dynamic: null,
};
const placesSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.paid = action.payload.paid;
      state.visit = action.payload.visit;
      state.recommeded = action.payload.recommeded;
      state.dynamic = action.payload.dynamic;
    },
  },
});
export const { setPlaces } = placesSlice.actions;
export const { setLoading } = placesSlice.actions;
export const selectPaids = (state) => state.place.paid;
export const selectVisits = (state) => state.place.visit;
export const selectRecommended = (state) => state.place.recommeded;
export const selectDynamic = (state) => state.place.dynamic;

export default placesSlice.reducer;
