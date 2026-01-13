import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import { s, vs } from "react-native-size-matters";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema, TSigninSchema } from "../../utils/validation";
import CustomInput from "../../Components/CustomInput";
import CustomFormWrapper from "../../Components/CustomFormWrapper";
import { images } from "../../assets";
import SubTitleText from "../../Components/CustomTexts/SubTitleText";
import CustomButton from "../../Components/CustomButton";
import { appColors } from "../../styles/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { screenPaddingHorizontal } from "../../utils/constants";
import SmallText from "../../Components/CustomTexts/SmallText";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp, MainStackNavigationProp } from "../../utils/typesAndInterfaces";

const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const navigate = useNavigation<MainStackNavigationProp>();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TSigninSchema>({
    resolver: yupResolver(signinSchema) as Resolver<TSigninSchema>,
  });

  const onSubmit = (data: TSigninSchema) => {
    console.log(data);

      navigate.navigate("homeTabs");
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={images.appLogo} />
        <CustomFormWrapper>
          <CustomInput
            placeHolder="Email"
            keyboardType="email-address"
            inputError={errors.email}
            control={control}
            name="email"
          />
          <CustomInput
            placeHolder="Password"
            keyboardType="default"
            inputError={errors.password}
            control={control}
            name="password"
            isPassword
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <SubTitleText textAlign="center" fontWeight="500">
                Smart E-Commerce
              </SubTitleText>
              <CustomButton
                bgColor={appColors.black}
                buttonText="Login"
                buttonFn={handleSubmit(onSubmit)}
              />
              {/* <CustomButton
              bgColor={appColors.white}
              buttonText="Sign Up"
              buttonFn={handleSubmit(onSubmit)}
              buttonTextColor={appColors.black}
            /> */}
            </View>
            <SubTitleText textColor="#575757" textAlign="center">
              Create an account{" "}
              <SubTitleText
                textColor="#F83758"
                textDecoration="underline"
                handleOnPress={() => navigation.navigate("signup")}
              >
                Sign Up
              </SubTitleText>
            </SubTitleText>
          </View>
        </CustomFormWrapper>
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
    paddingTop: vs(40),
    alignItems: "center",
    gap: s(20),
    width: "100%",
    // backgroundColor:"red"
  },
  image: {
    height: vs(150),
    width: s(150),
    resizeMode: "cover",
  },
  buttonContainer: {
    gap: vs(35),
   
  },
  button: {
    gap: vs(15),
  },
});
