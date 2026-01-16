import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import CartScreen from "../screens/cart/CartScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";


export type CartStackParams = {
  cartScreen: undefined;
  checkoutScreen: undefined;
};

const Stack = createStackNavigator<CartStackParams>();

function CartStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cartScreen" component={CartScreen} />
        <Stack.Screen name="checkoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
    );
}

export default CartStackNavigator;