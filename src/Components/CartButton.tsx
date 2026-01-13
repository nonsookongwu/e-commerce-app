import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { appColors } from '../styles/colors'
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props{
    cartFn?: () => void;
}

const CartButton = ({cartFn}:Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={cartFn}>
      <FontAwesome name="shopping-cart" size={15} color={appColors.white} />
    </TouchableOpacity>
  );
}

export default CartButton

const styles = StyleSheet.create({
    container: {
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: appColors.black,
        alignItems: "center",
        justifyContent: "center"
    }
})