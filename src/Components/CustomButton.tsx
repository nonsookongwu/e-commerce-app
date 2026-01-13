import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ComponentProps } from "react";
import SubTitleText from "./CustomTexts/SubTitleText";
import { s, vs } from "react-native-size-matters";
import SmallText from "./CustomTexts/SmallText";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { appColors } from "../styles/colors";

interface Props {
  bgColor: string;
  buttonText: string;
  buttonTextColor?: string;
  buttonFn?: () => void;
  loading?: boolean;
  iconName?: ComponentProps<typeof FontAwesome5>["name"];
  isDisabled?: boolean;
}

const CustomButton = ({
  bgColor,
  buttonText,
  buttonFn,
  loading,
  iconName,
  isDisabled, buttonTextColor
}: Props) => {
  const isValidFA5 = (name: string) => {
    return FontAwesome5.getRawGlyphMap()[name] !== undefined;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: isDisabled ? appColors.disabledGray : bgColor,
          borderWidth: s(1),
          borderColor: appColors.black,
        },
      ]}
      onPress={buttonFn}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.iconText}>
          {iconName && isValidFA5(iconName) ? (
            <FontAwesome5 name={iconName} size={s(20)} color="#fff" />
          ) : (
            iconName &&
            !isValidFA5(iconName) && (
              <AntDesign name={iconName} size={s(20)} color="#fff" />
            )
          )}
          <SubTitleText
            textColor={buttonTextColor ? buttonTextColor: appColors.white}
            fontWeight="700"
          >
            {buttonText}
          </SubTitleText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    height: vs(40),
    width: "100%",
    backgroundColor: appColors.primary,
    borderRadius: s(20),
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    flexDirection: "row",
    gap: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
});
