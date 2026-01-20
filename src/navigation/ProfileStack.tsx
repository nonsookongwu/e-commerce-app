import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import CartScreen from "../screens/cart/CartScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import OrderScreen from "../screens/profile/OrderScreen";

export type ProfileStackParams = {
    profileScreen: undefined;
  myOrderScreen: undefined;
};

const Stack = createStackNavigator<ProfileStackParams>();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profileScreen" component={ProfileScreen} options={{title:"Profile"}} />
      <Stack.Screen name="myOrderScreen" component={OrderScreen} options={{headerShown: true, title: "My Orders"}} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
