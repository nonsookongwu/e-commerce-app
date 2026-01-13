import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParams } from "../navigation/AuthStack";
import { MainStackParams } from "../navigation/MainStack";

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;
export type MainStackNavigationProp = NativeStackNavigationProp<MainStackParams>;

export type FontFamily = "Regular" | "Medium" | "SemiBold" | "Bold";
