import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import dataapiSlice from "../redux_setup/dataapiSlice";
// import authSlice from "../redux_setup/authSlice";
import dataApiSlice from "../features/api/dataApiSlice";
import { authProfile } from "../features/authSlice";
import dataSlice from "../features/dataSlice";
const reducer = combineReducers({
  dataSlice,
  [dataApiSlice.reducerPath]: dataApiSlice.reducer,
  [authProfile.reducerPath]: authProfile.reducer,
});
const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(dataApiSlice.middleware)
      .concat(authProfile.middleware),
});
export default store;
