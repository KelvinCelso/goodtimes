import { isNull } from "lodash";
import { atom } from "recoil";

export const pagesState = atom({
  key: "pagesState",
  default: null,
});
