import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./reducers/CardSlice"
import userDataReducer from "./reducers/UserDataSlice";
import totalReducer from "./reducers/TotalSlice";


export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    userDataSlice: userDataReducer,
    totalSlice: totalReducer
  },
});

// Type for dispatch and root state
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;