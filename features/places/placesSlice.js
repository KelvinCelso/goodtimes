import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paid: null,
  visit: null,
};
const placesSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.paid = action.payload.paid;
      state.visit = action.payload.visit;
    },
  },
});
export const { setPlaces } = placesSlice.actions;
export const { setLoading } = placesSlice.actions;
export const selectPaids = (state) => state.place.paid;
export const selectVisits = (state) => state.place.visit;

export default placesSlice.reducer;
