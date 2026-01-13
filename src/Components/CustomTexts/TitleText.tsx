import { StyleSheet, Text, View } from "react-native";
import React, { Children, ReactNode } from "react";
import { s } from "react-native-size-matters";
import { FontFamily } from "../../utils/typesAndInterfaces";
import { AppFont } from "../../styles/font";

interface Props {
  textColor?: string;
  children: ReactNode;
  fontWeight?: "400" | "500" | "600" | "700";
  letterSpacing?: number;
  textAlign?: "left" | "right" | "center";
  lineHeight?: number;
  fontFamily?:FontFamily
}

const TitleText = ({
  textColor,
  children,
  fontWeight,
  letterSpacing,
  textAlign,
  lineHeight, fontFamily="Regular"
}: Props) => {
  return (
    <Text
      style={[
        styles.socialMediaTitleText,
        { color: textColor, fontWeight, letterSpacing, textAlign, lineHeight, fontFamily: AppFont[fontFamily] },
      ]}
    >
      {children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  socialMediaTitleText: {
    fontWeight: 700,
    fontSize: s(36),
    lineHeight: s(36),
    color: "#000000",
    // marginLeft: 10,
  },
});
