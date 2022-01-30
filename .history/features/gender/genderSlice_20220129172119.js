import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  restaurante: null,
  bar: null,
  estilo: null,
  diversao: null,
};
const genderSlice = createSlice({
  name: "gender",
  InitialState,
  reducers: {
    setGenders: (state, action) => {
      state.restaurante = action.payload.restaurante;
      state.bar = action.payload.bar;
      state.estilo = action.payload.estilo;
      state.diversao = action.payload.diversao;
    },
  },
});
export const { setGenders } = genderSlice.actions;
export const selectRestaurante = (state) => state.gender.restaurante;
export const selectBar = (state) => state.gender.bar;
export const selectEstilo = (state) => state.gender.estilo;
export const selectDiversao = (state) => state.gender.diversao;
