import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./AuthStack";
import HomeTabs from "./HomeTabs";


export type MainStackParams = {
  auth: undefined;
  homeTabs: undefined;
};

const Stack = createStackNavigator<MainStackParams>();

function MainStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="auth" component={AuthStackNavigator} />
        <Stack.Screen name="homeTabs" component={HomeTabs} />
      </Stack.Navigator>
    );
}

export default MainStackNavigator;