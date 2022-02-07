import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const itemState = atom({
  key: "itemState",
  default: "bveDoEAV2eyXueHvN9yV",
});

export const imageState = atom({
  key: "imageState",
  default: "",
});
