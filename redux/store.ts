import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart.slice"

const store = configureStore({
  reducer:{
    cart:cartReducer
  },
});
export default store;
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

