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
