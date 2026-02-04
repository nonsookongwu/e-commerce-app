import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../styles/colors'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { vs } from 'react-native-size-matters';
import SubTitleText from '../../Components/CustomTexts/SubTitleText';
import SmallText from '../../Components/CustomTexts/SmallText';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp, BottomTabNavigationProp } from '../../utils/typesAndInterfaces';
import useGetLanguage from '../../hooks/useGetLanguage';

const EmptyCartScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp>();
  const language = useGetLanguage()

  const handleNavigate = () => {
    navigation.navigate("home")
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={150}
          color={appColors.black}
        />
        <SubTitleText fontFamily="Bold"> {language.empty_cart_title}</SubTitleText>
        <SmallText textAlign="center">
          {language.empty_cart_subtitle}
        </SmallText>
        <CustomButton
          buttonText={language.start_shopping}
          bgColor={appColors.black}
          buttonFn={handleNavigate}
        />
      </View>
    </View>
  );
}

export default EmptyCartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red"
  },
  innerContainer: {
    gap: vs(9),
    width: "60%",
alignItems: "center"
  },
})