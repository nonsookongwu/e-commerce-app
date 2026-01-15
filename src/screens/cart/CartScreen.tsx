import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { vs } from "react-native-size-matters";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import HomeHeader from "../../Components/Headers/HomeHeader";
import { screenPaddingHorizontal } from "../../utils/constants";
import { products } from "../home/data";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const CartScreen = () => {

 

  return (
    <CustomSafeAreaView>
      <HomeHeader />
      <View style={styles.container}>
        {/* <EmptyCartScreen /> */}
        {/* <CartItem /> */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem product={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: vs(60),
            gap: vs(5),
            paddingTop: vs(10),
          }}
        />
        <TotalView/>
      </View>
    </CustomSafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
  },
  
});
