import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { vs } from "react-native-size-matters";
import CustomSafeAreaView from "../../Components/CustomSafeAreaView";
import HomeHeader from "../../Components/Headers/HomeHeader";
import { useAppSelector } from "../../redux/store";
import { screenPaddingHorizontal } from "../../utils/constants";
import CartItem from "./CartItem";
import EmptyCartScreen from "./EmptyCartScreen";
import TotalView from "./TotalView";

const CartScreen = () => {

  const cartItems = useAppSelector((state) => state?.cartSlice.items);

  // console.log(cartItems)

  return (
    <CustomSafeAreaView>
      <HomeHeader />
      {cartItems.length === 0 ? (
        <EmptyCartScreen />
      ) : (
        <>
          <View style={styles.container}>
            {/* <CartItem /> */}
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CartItem product={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: vs(60),
                gap: vs(5),
                paddingTop: vs(10),
              }}
            />
          </View>
          <TotalView cartItems={cartItems} />
        </>
      )}
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
