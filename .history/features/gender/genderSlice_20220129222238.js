import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurante: null,
  bar: null,
  comercial: null,
  diversao: null,
};
const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setGenders: (state, action) => {
      state.restaurante = action.payload.restaurante;
      state.bar = action.payload.bar;
      state.comercial = action.payload.comercial;
      state.diversao = action.payload.diversao;
    },
  },
});
export const { setGenders } = genderSlice.actions;
export const selectRestaurante = (state) => state.gender.restaurante;
export const selectBar = (state) => state.gender.bar;
export const selectComercial = (state) => state.gender.comercial;
export const selectDiversao = (state) => state.gender.diversao;

export default genderSlice.reducer;
