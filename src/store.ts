import { configureStore } from "@reduxjs/toolkit";
import productApi from "./app/products/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import auth from "./app/auth/store/auth.slice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  devTools: true,
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
