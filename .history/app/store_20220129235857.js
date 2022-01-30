import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import placeReducer from "../features/places/placesSlice";
import genderReducer from "../features/gender/genderSlice";
import pageReducer from "../features/pag/pageSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
    gender: genderReducer,
    page: pageReducer,
  },
  middleware: getDefaultMiddleware({
    serielizableCheck: false,
  }),
});
