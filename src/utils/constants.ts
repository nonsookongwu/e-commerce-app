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
