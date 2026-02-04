import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { screenPaddingHorizontal } from "../../utils/constants";
import { vs } from "react-native-size-matters";
import OrderCard from "./OrderCard";
import useFetchUserOrders from "../../hooks/useFetchUserOrders";
import EmptyOrderScreen from "./EmptyOrderScreen";

const OrderScreen = () => {
  const { data: orderList, isLoading, refetch } = useFetchUserOrders();

  // console.log("order list is ", orderList);
  // if (isLoading) {
  //   return <ActivityIndicator/>
  // }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : !isLoading && orderList?.length === 0 ? (
        <EmptyOrderScreen />
      ) : (
        <FlatList
          data={orderList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard
              date={item.createdAt.seconds}
              price={item.totalPrice}
              totalPrice={item.totalProductsPricesSum}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: vs(30),
            gap: vs(15),
            paddingTop: vs(10),
          }}
          refreshing={isLoading}
          onRefresh={refetch}
        />
      )}
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: screenPaddingHorizontal,
    paddingTop: vs(10),
  },
});
