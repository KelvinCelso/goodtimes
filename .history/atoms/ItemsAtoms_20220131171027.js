import React from "react";
import { atom } from "recoil";

export const recommendedState = atom({
  key: "recommendedState",
  default: [],
});
