import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./AuthStack";
import HomeTabs from "./HomeTabs";
import OrderScreen from "../screens/profile/OrderScreen";


export type MainStackParams = {
  auth: undefined;
  homeTabs: undefined;
  myOrderScreen: undefined;
};

const Stack = createStackNavigator<MainStackParams>();

function MainStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={AuthStackNavigator} />
        <Stack.Screen name="homeTabs" component={HomeTabs} />
        <Stack.Screen
          name="myOrderScreen"
          component={OrderScreen}
          options={{ headerShown: true, title: "My Orders" }}
        />
      </Stack.Navigator>
    );
}

export default MainStackNavigator;