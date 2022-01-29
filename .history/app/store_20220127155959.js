import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
  },
  middleware: getDefaultMiddleware({
    serielizableCheck: false,
  }),
});
