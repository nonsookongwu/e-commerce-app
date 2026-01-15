import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckoutHeader from "../../Components/Headers/CheckoutHeader";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import CustomFormWrapper from "../../Components/CustomFormWrapper";
import { screenPaddingHorizontal } from "../../utils/constants";
import { s, vs } from "react-native-size-matters";
import CustomButton from "../../Components/CustomButton";
import { appColors } from "../../styles/colors";

const CheckoutScreen = () => {
  return (
    <CustomSafeAreaView>
      <CheckoutHeader />
      <View style={styles.formWrapper}>
        <CustomFormWrapper>
          <View style={styles.formContainer}>
            <View style={styles.formHolder}></View>
            <CustomButton bgColor={appColors.black} buttonText="Confirm" />
          </View>
        </CustomFormWrapper>
      </View>
    </CustomSafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingHorizontal: screenPaddingHorizontal,
  },
  formContainer: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "space-between",
    paddingVertical: vs(20),
  },
  formHolder: {
    padding: s(5),
    gap: vs(7),
    height: 200,
    backgroundColor: "hotpink",
  },
});
