import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./AuthStack";
import HomeTabs from "./HomeTabs";
import OrderScreen from "../screens/profile/OrderScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_KEY } from "../utils/constants";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/Firebase";


export type MainStackParams = {
  auth: undefined;
  homeTabs: undefined;
  myOrderScreen: undefined;
};

const Stack = createStackNavigator<MainStackParams>();

function MainStackNavigator() {

  // const [isLoggedIn, setisLoggedIn] = useState("");
  const [userData, setUserData] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true)

  // const isUserLoggedIn = async() => {
  //   try {
  //   setisLoading(true)
  //   const getData = await AsyncStorage.getItem(USER_KEY)
  //   // console.log(getData)
  //   if (getData) {
  //     setisLoggedIn(getData);
  //   } 
    
  // } catch (error) {
  //   console.error(error)
  //   } finally {
  //     setisLoading(false);
  // }
  // }
  
  // useEffect(() => {
  //     isUserLoggedIn();
  // }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUserData(data)
        setIsLoading(false)
        console.log("user is logged in")
      } else {
        console.log("user is out")
        setIsLoading(false);
      }
    });
  }, [])
  


  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={userData ? "homeTabs" : "auth"}
      >
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