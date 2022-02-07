import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  userId: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.userId = action.payload.userId;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.email = null;
      state.userId = null;
    },
  },
});
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectUserID = (state) => state.user.userId;

export default userSlice.reducer;
