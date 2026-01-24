import React, { useEffect } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import CustomSafeAreaView from '../../Components/CustomSafeAreaView'
import HomeHeader from '../../Components/Headers/HomeHeader'
import ProductCard from '../../Components/ProductCard'
import { screenPaddingHorizontal } from '../../utils/constants'
import { products } from './data'
import useGetProductsData from '../../hooks/useGetProductsData'
// import useGetProductsData from '../../hooks/useGetProductsData'

const HomeScreen = () => {

  // const fetchData = async () => {
  //   const data = await fetchProductsData();
  //   // console.log(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  const { data: Products, refetch, isLoading } = useGetProductsData();
  
  // console.log(JSON.stringify(Products, null, 3));
  

  return (
    <CustomSafeAreaView>
      <HomeHeader />
      {/* <SubTitleText fontFamily='SemiBold'>HomeScreen</SubTitleText> */}
      <View style={styles.screenContainer}>
        <FlatList
          data={Products}
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
            paddingTop: vs(10),
          }}
          refreshing={isLoading}
          onRefresh={refetch}
        />
      </View>
      {/* <Button title="refetch" onPress={refetch} /> */}
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