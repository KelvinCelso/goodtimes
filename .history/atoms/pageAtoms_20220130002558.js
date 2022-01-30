import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
export const catState = atom({
  key: "catState",
  default: "default",
  effects_UNSTABLE: [persistAtom],
});
