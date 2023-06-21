import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistedState, saveState } from "../utils/persisted.store";
import authSlice from "./slices/auth/authSlice";
import  commonSlice  from "./slices/common/sidebar";
import serviceSlice from "./slices/service/serviceSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    common: commonSlice,
    service: serviceSlice,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

