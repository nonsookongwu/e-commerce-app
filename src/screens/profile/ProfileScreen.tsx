import { signOut } from "@firebase/auth";
import BottomSheet from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { vs } from "react-native-size-matters";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import SectionTitleText from "../../Components/CustomTexts/SectionTitleText";
import HomeHeader from "../../Components/Headers/HomeHeader";
import LanguageBottomSheet from "../../Components/Language/LanguageBottomSheet";
import { auth } from "../../config/Firebase";
import useGetLanguage from "../../hooks/useGetLanguage";
import { useAppSelector } from "../../redux/store";
import { screenPaddingHorizontal } from "../../utils/constants";
import { getGreeting } from "../../utils/helperFunctions";
import { MainStackNavigationProp, ProfileNavigationProp } from "../../utils/typesAndInterfaces";
import ProfileMenuButton from "./ProfileMenuButton";

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const navigate = useNavigation<MainStackNavigationProp>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const language = useGetLanguage()
  const userData = useAppSelector((state) => state.userDataSlice.user)
  // console.log(userData);

  // const greeting = useMemo(() => {
  //   return getGreeting()
  // }, [language])

  const handleNavigation = () => {
    navigation.navigate("myOrderScreen")
  }
  const handleLanguage = () => {
    bottomSheetRef.current?.expand()
  }
  const handleLogout = async() => {
    // navigation.navigate("myOrderScreen")
    try {
      await AsyncStorage.clear();
      await signOut(auth)
      navigate.navigate("auth")
    } catch (error) {
      console.error(error);
    }
  }
  const buttonMenu = [
    { id: 1, label: language.profile_my_orders, fn: handleNavigation },
    { id: 2, label: language.profile_language, fn: handleLanguage },
    { id: 3, label: language.profile_logout, fn: handleLogout },
  ];
  return (
    <CustomSafeAreaView>
      <HomeHeader />
      <View style={styles.container}>
        <SectionTitleText fontFamily="Bold">{`${getGreeting(language)} ${Boolean(userData?.displayName) ? userData?.displayName : "Dear"}`}</SectionTitleText>
        <View style={styles.buttonContainer}>
          {buttonMenu.map((item) => (
            <ProfileMenuButton
              key={item.id}
              label={item.label}
              onPressFn={item.fn}
            />
          ))}
        </View>
        <LanguageBottomSheet bottomSheetRef={bottomSheetRef} />
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
