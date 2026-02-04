import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageData } from "../../utils/typesAndInterfaces";
import { english } from "../../localization/Languages";


interface Language {
  value: LanguageData;
}

const initialState: Language = {
  value: english,
};

const LanguageSlice = createSlice({
  name: "LanguageSlice",
  initialState,
  reducers: {
    //addItem to Cart
    setLanguage: (state, action: PayloadAction<LanguageData>) => {
      state.value = action.payload;
    },
  },
});

export const {setLanguage} = LanguageSlice.actions;

// Export selector to access state
// export const getCartItems = (state: {cartProducts: CartItems})=> state.cartProducts.items

export default LanguageSlice.reducer;
