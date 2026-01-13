import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";
import { FontFamily } from "../../utils/typesAndInterfaces";
import { AppFont } from "../../styles/font";

interface Props {
  textColor?: string;
  children: ReactNode;
  fontWeight?: "400" | "500" | "600" | "700";
  handleOnPress?: () => void;
  textDecoration?: "underline" | "line-through";
  textAlign?: "left" | "right" | "center";
  fontFamily?: FontFamily
}

const SubTitleText = ({
  textColor,
  children,
  fontWeight,
  handleOnPress, textDecoration, textAlign, fontFamily="Regular"
}: Props) => {
  return (
    <Text
      style={[
        styles.Text,
        { color: textColor, fontWeight, textDecorationLine: textDecoration, textAlign, fontFamily: AppFont[fontFamily] },
      ]}
      onPress={handleOnPress}
    >
      {children}
    </Text>
  );
};

export default SubTitleText;

const styles = StyleSheet.create({
  Text: {
    fontWeight: 500,
    fontSize: s(16),
    lineHeight: s(18),
    color: "#000000",
    // borderWidth: 1,
    // borderColor: "#000",
    includeFontPadding: false
  },
});
