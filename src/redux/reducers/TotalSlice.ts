import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, UserData } from "../../utils/typesAndInterfaces";
import { products } from "../../screens/home/data";
import { User } from "firebase/auth";

interface Total {
  totalBeforeTax: number;
  totalAfterTax: number;
}
interface Initial{
    value: Total| null
}

const initialState: Initial = {
  value: null,
};

const TotalSlice = createSlice({
  name: "TotalSlice",
  initialState,
  reducers: {
    //addItem to Cart
    setTotalData: (state, action: PayloadAction<Total | null>) => {
      state.value = action.payload;
    },
  },
});

export const { setTotalData } = TotalSlice.actions;

// Export selector to access state
// export const getCartItems = (state: {cartProducts: CartItems})=> state.cartProducts.items

export default TotalSlice.reducer;
