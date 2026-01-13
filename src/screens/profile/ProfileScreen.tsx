import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../Components/CustomSafeAreaView'
import HomeHeader from '../../Components/Headers/HomeHeader';

const ProfileScreen = () => {
  return (
    <CustomSafeAreaView>
      <HomeHeader />
      <Text>ProfileScreen</Text>
    </CustomSafeAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})