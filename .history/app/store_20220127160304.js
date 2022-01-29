import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import placeReducer from "../features/places/placesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
  },
  middleware: getDefaultMiddleware({
    serielizableCheck: false,
  }),
});
