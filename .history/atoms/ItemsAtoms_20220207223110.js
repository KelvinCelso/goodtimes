import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const likedState = atom({
  key: "likedState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const uidState = atom({
  key: "uidState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const favoriteState = atom({
  key: "favoriteState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const favoritePlaceState = atom({
  key: "favoritePlaceState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
