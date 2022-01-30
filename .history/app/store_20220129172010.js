import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import placeReducer from "../features/places/placesSlice";
import genderReducer from "../features/gender/genderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
    genero: genderReducer,
  },
  middleware: getDefaultMiddleware({
    serielizableCheck: false,
  }),
});
