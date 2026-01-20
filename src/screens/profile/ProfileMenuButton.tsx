import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'
import { appColors } from '../../styles/colors';
import SubTitleText from '../../Components/CustomTexts/SubTitleText';
import Feather from "@expo/vector-icons/Feather";

interface Props{
    label: string;
    onPressFn?: () => void;
}

const ProfileMenuButton = ({label, onPressFn}:Props) => {
  return (
    <TouchableOpacity onPress={onPressFn} style={styles.container}>
      <SubTitleText fontFamily="SemiBold">{label}</SubTitleText>
      <Feather name="chevron-right" size={22} color="black" />
    </TouchableOpacity>
  );
}

export default ProfileMenuButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: vs(45),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGray,

    }
})