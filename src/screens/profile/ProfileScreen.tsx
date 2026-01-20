import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import HomeHeader from "../../Components/Headers/HomeHeader";
import { screenPaddingHorizontal } from "../../utils/constants";
import ProfileMenuButton from "./ProfileMenuButton";
import { vs } from "react-native-size-matters";
import TitleText from "../../Components/CustomTexts/TitleText";
import SectionTitleText from "../../Components/CustomTexts/SectionTitleText";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProp } from "../../utils/typesAndInterfaces";

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  const handleNavigation = () => {
    navigation.navigate("myOrderScreen")
  }
  const handleLanguage = () => {
    // navigation.navigate("myOrderScreen")
  }
  const handleLogout = () => {
    // navigation.navigate("myOrderScreen")
  }
  const buttonMenu = [
    { id: 1, label: "My Orders", fn: handleNavigation },
    { id: 2, label: "Language", fn: handleLanguage },
    { id: 3, label: "Logout", fn: handleLogout },
  ];
  return (
    <CustomSafeAreaView>
      <HomeHeader />
      <View style={styles.container}>
        <SectionTitleText fontFamily="Bold">Hello Ahmed</SectionTitleText>
        <View style={styles.buttonContainer}>
          {buttonMenu.map((item) => (
            <ProfileMenuButton key={item.id} label={item.label} onPressFn={item.fn} />
          ))}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
    paddingTop: vs(20),
    gap: vs(10)
  },
  buttonContainer: {
    width: "100%",
    // gap: vs(3)
  },
});
