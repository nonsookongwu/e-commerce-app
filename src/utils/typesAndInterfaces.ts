import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParams } from "../navigation/AuthStack";
import { MainStackParams } from "../navigation/MainStack";
import { BottomTabParams } from "../navigation/HomeTabs";
import { CartStackParams } from "../navigation/CartStack";
import { ProfileStackParams } from "../navigation/ProfileStack";

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;
export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParams>;
export type BottomTabNavigationProp =
  NativeStackNavigationProp<BottomTabParams>;
export type CartNavigationProp = NativeStackNavigationProp<CartStackParams>;
export type ProfileNavigationProp =
  NativeStackNavigationProp<ProfileStackParams>;

export type FontFamily = "Regular" | "Medium" | "SemiBold" | "Bold";

export interface Product {
  imageURL: string;
  title: string;
  price: number;
  id: number | string;
  qty?: number;
  sum?: number;
}

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
}

export interface Order{
      "id": string;
      "totalPrice": number;
      "address":string;
      "fullName": string;
      "items": Product[];
      "totalProductsPricesSum": number;
  "phoneNumber": string;
  "createdAt": {
         "seconds": number,
      };
   }