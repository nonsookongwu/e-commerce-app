import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";
import { FontFamily } from "../../utils/typesAndInterfaces";
import { AppFont } from "../../styles/font";

interface Props {
  textColor?: string;
  children: ReactNode;
  fontWeight?: "400" | "500" | "600" | "700";
  fontFamily?: FontFamily
  letterSpacing?: number;
  textAlign?: "left" | "right" | "center";
  lineHeight?: number;
  handleOnPress?: () => void;
}

const SmallText = ({
  textColor,
  children,
  fontWeight,
  letterSpacing,
  textAlign,
  lineHeight,
  handleOnPress,
  fontFamily="Regular"
}: Props) => {
  return (
    <Text
      onPress={handleOnPress}
      style={[
        styles.Text,
        {
          color: textColor,
          fontWeight,
          letterSpacing,
          textAlign,
          lineHeight,
          // lineHeight: Math.round(12 * 1.4),
          fontFamily: AppFont[fontFamily],
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  Text: {
    fontWeight: 500,
    fontSize: s(12),
    lineHeight: 14,
    color: "#000000",
    // borderWidth: 1,
    // borderColor: "#000",
    paddingVertical: 2,
    includeFontPadding: false,
  },
});
