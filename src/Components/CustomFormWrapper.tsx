import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { s, vs } from "react-native-size-matters";

const CustomFormWrapper = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        gap: vs(15),
        width: "100%",
        paddingHorizontal: s(5),
        paddingVertical: vs(5),
      }}
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default CustomFormWrapper;

const styles = StyleSheet.create({});
