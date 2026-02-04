import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./reducers/CardSlice"
import userDataReducer from "./reducers/UserDataSlice";
import totalReducer from "./reducers/TotalSlice";
import languageReducer from "./reducers/LanguageSlice";
import { persistedCart, persistedLanguage } from "./ReduxPersistConfig";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


export const store = configureStore({
  reducer: {
    cartSlice: persistedCart,
    userDataSlice: userDataReducer,
    totalSlice: totalReducer,
    languageSlice: persistedLanguage,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Type for dispatch and root state
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store)