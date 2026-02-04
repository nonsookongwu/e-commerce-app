import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist"
import languageSlice from "./reducers/LanguageSlice"
import cartSlice from "./reducers/CardSlice"

const langugagePersistConfig = {
  key: "langugage",
  storage: AsyncStorage,
  whitelist: ["value"],
};

export const persistedLanguage = persistReducer(langugagePersistConfig, languageSlice);


const cartPersistConfig = {
  key: "cart",
  storage: AsyncStorage,
  whitelist: ["items"],
};

export const persistedCart = persistReducer(cartPersistConfig, cartSlice);