import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../Components/CustomSafeAreaView'
import HomeHeader from '../../Components/Headers/HomeHeader';

const CartScreen = () => {
  return (
    <CustomSafeAreaView>
      <HomeHeader />
      <Text>CartScreen</Text>
    </CustomSafeAreaView>
  );
}

export default CartScreen

const styles = StyleSheet.create({})