import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/typesAndInterfaces";
import { products } from "../../screens/home/data";

interface CartItems {
  items: Product[];
}

const initialState: CartItems = {
  items: [],
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    //addItem to Cart
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.price += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },
    //remove item from cart
    reduceItemCount: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.qty -= 1;
        existingItem.price -= existingItem.sum;
      }
    },
    addItemCount: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.price += existingItem.sum;
      }
    },
    //remove product from cart
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        const remainingProducts = state.items.filter(
          (item) => item.id !== existingItem.id,
        );
        state.items = remainingProducts;
      }
    },
    //empty cart
    emptyCart: (state) => {
        if (state.items.length === 0) return;
        state.items = []
    },
  },
});

export const { addItemToCart, reduceItemCount, addItemCount, removeProductFromCart, emptyCart } =
  CartSlice.actions;

// Export selector to access state
// export const getCartItems = (state: {cartProducts: CartItems})=> state.cartProducts.items

export default CartSlice.reducer;
