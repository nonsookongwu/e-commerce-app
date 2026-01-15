import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import CartScreen from "../screens/cart/CartScreen";
import { appColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IS_Android } from "../utils/constants";

export type BottomTabParams = {
  home: undefined;
  cart: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarLabelStyle: { fontSize: s(12), marginTop: vs(4) },
        tabBarStyle: IS_Android &&{
          height: vs(60)
        },
        tabBarItemStyle: {
          // borderWidth: 1,
          // borderColor: "red",
          alignItems: "center",
          paddingTop: vs(5),
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
