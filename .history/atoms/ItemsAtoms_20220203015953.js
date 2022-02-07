import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const imageState = atom({
  key: "imageState",
  default: "",
});
