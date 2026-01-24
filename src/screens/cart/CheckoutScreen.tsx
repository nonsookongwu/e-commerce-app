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
import { useAppSelector } from "../../redux/store";
import { usePlaceOrder } from "../../hooks/usePlaceOrder";
import { showMessage } from "react-native-flash-message";

const CheckoutScreen = () => {
  const user = useAppSelector((state) => state.userDataSlice.user);
  const items = useAppSelector((state) => state.cartSlice.items);
  const totalOBJ = useAppSelector((state) => state.totalSlice.value);
  console.log(JSON.stringify(items, null, 3));
  // console.log(JSON.stringify(totalOBJ, null, 3));
const {mutate, isPending} = usePlaceOrder()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TCheckoutSchema>({
    resolver: yupResolver(CheckoutSchema) as Resolver<TCheckoutSchema>,
  });

  const onSubmit = (data: TCheckoutSchema) => {
    // console.log(data);
    if (!user) {
      showMessage({ type: "danger", message: "you have to login first" })
      return
    }
    
    const Body = {
      data,
      items,
      totalProductsPricesSum: totalOBJ?.totalBeforeTax,
      createdAt: new Date(),
      totalPrice: totalOBJ?.totalAfterTax,
      userID: user?.uid
    };

    mutate(Body)
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
              loading={isPending}
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
