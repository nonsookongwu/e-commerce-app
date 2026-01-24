import { Platform, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

export const screenPaddingHorizontal = s(12)
export const IS_Android = Platform.OS === "android";

export const commonStyles = StyleSheet.create({
    shadow: {
        
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
    }
})

export const Tax = 60
export const ShippingFee = 10

export const FirebaseErrorCodes = {
  "auth/email-already-exists": "email is already in use by an existing user",
  "auth/email-already-in-use": "email is already in use by an existing user",
  "auth/invalid-credential": "Invalid credential",
  "auth/invalid-email": "Invalid email or password",
    "auth/invalid-password": "Invalid email or password",
    "auth/phone-number-already-exists": "Phone number is already in use",
  "auth/user-not-found": "User does not exist",
  "auth/weak-password": "Password is too weak"
};
