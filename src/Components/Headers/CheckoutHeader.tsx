import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import SubTitleText from "../CustomTexts/SubTitleText";
import { useNavigation } from "@react-navigation/native";

const CheckoutHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={styles.innerContainer}>
        <SubTitleText lineHeight={0} textAlign="center" fontFamily="SemiBold">
          Checkout
        </SubTitleText>
      </View>
    </View>
  );
};

export default CheckoutHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: appColors.white,
    paddingHorizontal: s(12),
    paddingVertical: vs(10),
    flexDirection: "row",
    // borderWidth: 1,
    //     borderColor: "red",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
