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
   

export interface LanguageData {
  countryCode: string;
  sign_in_email_placeholder: string;
  sign_in_password_placeholder: string;
  sign_in_login_button: string;
  sign_in_signup_button: string;
  sign_in_email_required: string;
  sign_in_email_invalid: string;
  sign_in_password_required: string;
  sign_in_password_min_length: string;
  sign_in_error_user_not_found: string;
  sign_in_error_invalid_credential: string;
  sign_in_error_default: string;

  sign_up_username_placeholder: string;
  sign_up_email_placeholder: string;
  sign_up_password_placeholder: string;
  sign_up_create_account_button: string;
  sign_up_goto_signin_button: string;
  sign_up_username_required: string;
  sign_up_username_min_length: string;
  sign_up_email_invalid: string;
  sign_up_email_required: string;
  sign_up_password_required: string;
  sign_up_password_min_length: string;
  sign_up_success: string;
  sign_up_error_email_in_use: string;
  sign_up_error_invalid_email: string;
  sign_up_error_weak_password: string;
  sign_up_error_default: string;

  tab_home: string;
  tab_cart: string;
  tab_profile: string;

  cart_continue_button: string;
  cart_checkout_screen: string;

  empty_cart_title: string;
  empty_cart_subtitle: string;
  start_shopping: string;

  checkout_fullname_placeholder: string;
  checkout_phone_placeholder: string;
  checkout_address_placeholder: string;
  checkout_confirm_button: string;
  checkout_name_required: string;
  checkout_name_min_length: string;
  checkout_phone_required: string;
  checkout_phone_digits: string;
  checkout_phone_min_length: string;
  checkout_address_required: string;
  checkout_address_min_length: string;
  checkout_success_message: string;
  checkout_error_message: string;

  profile_my_orders: string;
  profile_language: string;
  profile_logout: string;
  profile_welcome: string;

  totals_items_price: string;
  totals_taxes: string;
  totals_shipping_fee: string;
  totals_order_total: string;
  totals_currency: string;

  order_details_title: string;
  order_total_price: string;
  order_date: string;

  change_language: string;
  good_morning: string;
  good_afternoon: string;
  good_evening: string;
  good_night: string;
  empty_order_title: string;
};