import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenPaddingHorizontal } from "../../utils/constants";
import { vs } from "react-native-size-matters";
import OrderCard from "./OrderCard";

const OrderScreen = () => {
  const orderList = [
    { id: 1, totalPrice: 120.5, misc: 30, date: "2026-01-28" },
    { id: 2, totalPrice: 75, misc: 15, date: "2026-01-29" },
    { id: 3, totalPrice: 200.25, misc: 50, date: "2026-01-30" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrderCard date={item.date} price={item.totalPrice} totalPrice={item.misc + item.totalPrice} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: vs(30),
          gap: vs(15),
          paddingTop: vs(10),
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
    paddingTop: vs(20),
  },
});
