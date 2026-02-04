import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import Ionicons from "@expo/vector-icons/Ionicons";
import SubTitleText from '../CustomTexts/SubTitleText';
import { appColors } from '../../styles/colors';

interface Props{
    label: string;
    onClickLanguage: () => void;
    isSelected: boolean
}

const LanguageCard = ({ label, onClickLanguage, isSelected }: Props) => {
    

  return (
    <Pressable style={styles.container} onPress={onClickLanguage}>
      {isSelected ? (
        <Ionicons name="radio-button-on" size={20} color={appColors.black} />
      ) : (
        <Ionicons
          name="radio-button-off-sharp"
          size={20}
          color={appColors.black}
        />
      )}
      <SubTitleText fontFamily="Medium">{label}</SubTitleText>
    </Pressable>
  );
}

export default LanguageCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: s(7),
        // height: vs(40),
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "red"
    }
})