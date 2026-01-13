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
import { appColors } from "../../styles/colors";
import { screenPaddingHorizontal } from "../../utils/constants";
import { AuthNavigationProp } from "../../utils/typesAndInterfaces";
import { signUpSchema, TSignUpSchema } from "../../utils/validation";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: yupResolver(signUpSchema) as Resolver<TSignUpSchema>,
  });

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);

      //   navigation.navigate("dashboard", { ...data });
      navigation.canGoBack()
  };
    
    const handleNavigation = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            navigation.navigate("login")
        }
    }

  return (
    <CustomSafeAreaView>
      <CustomFormWrapper>
        <View style={styles.container}>
          <Image style={styles.image} source={images.appLogo} />

          <CustomInput
            placeHolder="User name"
            keyboardType="default"
            inputError={errors.userName}
            control={control}
            name="userName"
          />
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
                buttonText="Create new Account"
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
              Already has an account{" "}
              <SubTitleText
                textColor="#F83758"
                textDecoration="underline"
                handleOnPress={handleNavigation}
              >
                Log in
              </SubTitleText>
            </SubTitleText>
          </View>
        </View>
      </CustomFormWrapper>
    </CustomSafeAreaView>
  );
};

export default SignUpScreen;

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
    marginBottom: vs(10)
  },
  buttonContainer: {
    gap: vs(35),
    width: "100%",
  },
  button: {
    gap: vs(15),
  },
});
