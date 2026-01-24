import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Resolver, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { images } from "../../assets";
import CustomButton from "../../Components/CustomButton";
import CustomFormWrapper from "../../Components/CustomFormWrapper";
import CustomInput from "../../Components/CustomInput";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import SubTitleText from "../../Components/CustomTexts/SubTitleText";
import useLogin from "../../hooks/useLogin";
import { appColors } from "../../styles/colors";
import { screenPaddingHorizontal } from "../../utils/constants";
import { AuthNavigationProp } from "../../utils/typesAndInterfaces";
import { signinSchema, TSigninSchema } from "../../utils/validation";

const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  
  const {Login, isLoading} = useLogin()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSigninSchema>({
    resolver: yupResolver(signinSchema) as Resolver<TSigninSchema>,
  });

  const onSubmit = async(data: TSigninSchema) => {
    // console.log(data);

    await Login(data)
      // navigate.navigate("homeTabs");
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomFormWrapper>
          <Image style={styles.image} source={images.appLogo} />
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
                loading={isLoading}
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
    alignSelf: "center"
  },
  buttonContainer: {
    gap: vs(35),
   
  },
  button: {
    gap: vs(15),
  },
});
