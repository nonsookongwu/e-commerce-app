import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParams } from "../navigation/AuthStack";
import { MainStackParams } from "../navigation/MainStack";
import { BottomTabParams } from "../navigation/HomeTabs";

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;
export type MainStackNavigationProp = NativeStackNavigationProp<MainStackParams>;
export type BottomTabNavigationProp = NativeStackNavigationProp<BottomTabParams>;

export type FontFamily = "Regular" | "Medium" | "SemiBold" | "Bold";

export interface Product {
  imageURL: string;
  title: string;
  price: number;
  id: number;
}
