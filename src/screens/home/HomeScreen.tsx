import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import CustomSafeAreaView from '../../Components/CustomSafeAreaView'
import HomeHeader from '../../Components/Headers/HomeHeader'
import ProductCard from '../../Components/ProductCard'
import { screenPaddingHorizontal } from '../../utils/constants'
import { products } from './data'

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <HomeHeader />
      {/* <SubTitleText fontFamily='SemiBold'>HomeScreen</SubTitleText> */}
      <View style={styles.screenContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            // gap: s(5),
            justifyContent: "space-between",
          }}
          contentContainerStyle={{
            paddingBottom: vs(60),
            gap: vs(10),
            paddingTop: vs(10)
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
    paddingTop: vs(10)
  }
})