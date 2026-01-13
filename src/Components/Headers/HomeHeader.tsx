import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { images } from '../../assets'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
          <Image source={images.appLogo} style={ styles.image} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: vs(10)
    },
    image: {
        height: vs(40), 
        width: s(40),
        tintColor: appColors.white
    }
});