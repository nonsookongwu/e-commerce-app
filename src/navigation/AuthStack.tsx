import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";


export type AuthStackParams = {
  login: undefined;
  signup: undefined;
};

const Stack = createStackNavigator<AuthStackParams>();

function AuthStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Navigator>
    );
}

export default AuthStackNavigator;