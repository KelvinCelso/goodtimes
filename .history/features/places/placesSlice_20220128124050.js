import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paid: null,
  visit,
};
const placesSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.paid = action.payload.paid;
    },
  },
});
export const { setPlaces } = placesSlice.actions;
export const selectPaids = (state) => state.place.paid;

export default placesSlice.reducer;
