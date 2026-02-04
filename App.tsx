import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/navigation/MainStack";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <GestureHandlerRootView>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <FlashMessage />
                <SafeAreaProvider>
                  <NavigationContainer>
                    <MainStackNavigator />
                  </NavigationContainer>
                </SafeAreaProvider>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </GestureHandlerRootView>
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
