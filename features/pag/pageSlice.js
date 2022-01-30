import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: null,
};
const pageSlice = createSlice({
  name: "page",
  initialState,

  reducers: {
    setPages: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const { setPages } = pageSlice.actions;
export const selectPages = (state) => state.page.page;

export default pageSlice.reducer;
