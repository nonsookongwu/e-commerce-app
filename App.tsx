import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./src/screens/authScreens/LoginScreen";
import SignUpScreen from "./src/screens/authScreens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStack";
import MainStackNavigator from "./src/navigation/MainStack";
import { useFonts } from "expo-font";
import CheckoutScreen from "./src/screens/cart/CheckoutScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
const queryClient = new QueryClient()
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
    
  })
  
  if (!fontLoaded) {
    return <ActivityIndicator size={"large"}/>
  }
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <FlashMessage />
            <SafeAreaProvider>
              <NavigationContainer>
                <MainStackNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </Provider>
        </QueryClientProvider>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
