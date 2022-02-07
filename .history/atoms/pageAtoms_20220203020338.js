import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const catState = atom({
  key: "catState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
