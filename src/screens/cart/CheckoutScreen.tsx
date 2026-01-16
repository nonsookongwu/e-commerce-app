import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckoutHeader from "../../Components/Headers/CheckoutHeader";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import CustomFormWrapper from "../../Components/CustomFormWrapper";
import { screenPaddingHorizontal } from "../../utils/constants";
import { s, vs } from "react-native-size-matters";
import CustomButton from "../../Components/CustomButton";
import { appColors } from "../../styles/colors";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutSchema, TCheckoutSchema } from "../../utils/validation";
import CustomInput from "../../Components/CustomInput";

const CheckoutScreen = () => {

const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm<TCheckoutSchema>({
  resolver: yupResolver(CheckoutSchema) as Resolver<TCheckoutSchema>,
});

  const onSubmit = (data: TCheckoutSchema) => {
    console.log(data);

      
  };

  return (
    <CustomSafeAreaView>
      <CheckoutHeader />
      <View style={styles.formWrapper}>
        <CustomFormWrapper>
          <View style={styles.formContainer}>
            <View style={styles.formHolder}>
              <CustomInput
                placeHolder="Full name"
                keyboardType="default"
                inputError={errors.fullName}
                control={control}
                name="fullName"
              />
              <CustomInput
                placeHolder="Phone Number"
                keyboardType="numeric"
                inputError={errors.phoneNumber}
                control={control}
                name="phoneNumber"
              />
              <CustomInput
                placeHolder="Detailed Address"
                keyboardType="default"
                inputError={errors.address}
                control={control}
                name="address"
              />
            </View>
            <CustomButton
              bgColor={appColors.black}
              buttonFn={handleSubmit(onSubmit)}
              buttonText="Confirm"
            />
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
    padding: s(15),
    gap: vs(7),
    // height: 200,
    borderColor: appColors.lightGray,
    borderWidth: 1,
    borderRadius: s(8),
    justifyContent: "center",
  },
});
