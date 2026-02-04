import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../utils/typesAndInterfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_KEY } from "../../utils/constants";

interface FireBaseUser {
  user: UserData| null
}

const initialState: FireBaseUser = {
    user: null
};

const UserDataSlice = createSlice({
  name: "UserDataSlice",
  initialState,
  reducers: {
    //addItem to Cart
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
      AsyncStorage.setItem(USER_KEY, JSON.stringify(action.payload));
    },
  },
});

export const {setUserData} = UserDataSlice.actions;

// Export selector to access state
// export const getCartItems = (state: {cartProducts: CartItems})=> state.cartProducts.items

export default UserDataSlice.reducer;
