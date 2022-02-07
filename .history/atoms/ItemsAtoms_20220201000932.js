import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
export const itemState = atom({
  key: "itemState",
  default: "bveDoEAV2eyXueHvN9yV",
  effects_UNSTABLE: [persistAtom],
});

export const imageState = atom({
  key: "imageState",
  default: "",
});
