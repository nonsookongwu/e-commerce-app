import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { vs, s } from "react-native-size-matters";
import CustomButton from "../../Components/CustomButton";
import SubTitleText from "../../Components/CustomTexts/SubTitleText";
import { appColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { CartNavigationProp, Product } from "../../utils/typesAndInterfaces";
import { formatAmount } from "../../utils/helperFunctions";
import { ShippingFee, Tax } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setTotalData } from "../../redux/reducers/TotalSlice";

interface Props {
  cartItems: Product[];
}

const TotalView = ({ cartItems }: Props) => {
  // const [total, setTotal] = useState(0)
  // const [grandtotal, setGrandTotal] = useState(0)
  const navigation = useNavigation<CartNavigationProp>();
  const dispatch = useDispatch();

  const total = cartItems
    ?.map((item) => item.price)
    .reduce((acc, val) => acc + val, 0);
  const grandTotal = total + Tax + ShippingFee;
  // useEffect(() => {
  //   const total = cartItems?.map((item) => item.price).reduce((acc, val) => acc + val, 0)
  //   setTotal(total);
  //   const grandTotal = total + Tax + ShippingFee
  //   setGrandTotal(grandTotal);
  // }, [cartItems]);

  const paymentSummary = [
    { id: 1, label: "Order Total", value: formatAmount(total) },
    { id: 2, label: "Taxes & Fees", value: formatAmount(Tax) },
    { id: 3, label: "Shipping Fees", value: formatAmount(ShippingFee) },
  ];

  useEffect(() => {
    if (total && grandTotal) {
      const payload = {
        totalBeforeTax: total,
        totalAfterTax: grandTotal,
      };
      dispatch(setTotalData(payload));
    }
  }, [total, grandTotal]);

  return (
    <View style={styles.totalContainer}>
      <View style={styles.totalRowContainer}>
        {paymentSummary.map((item) => (
          <View style={styles.totalRow} key={item.id}>
            <SubTitleText fontFamily="SemiBold">{item.label}:</SubTitleText>
            <SubTitleText>{item.value}</SubTitleText>
          </View>
        ))}
      </View>
      <View style={styles.totalOrderRow}>
        <SubTitleText fontFamily="Bold">Order Total:</SubTitleText>
        <View style={styles.OrderTotalNumber}>
          <Entypo name="plus" size={17} color="black" />
          <SubTitleText>{formatAmount(grandTotal)}</SubTitleText>
        </View>
      </View>
      <CustomButton
        buttonText="Continue"
        buttonFn={() => navigation.navigate("checkoutScreen")}
        bgColor={appColors.black}
      />
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  totalContainer: {
    // height: vs(200),
    backgroundColor: appColors.white,
    paddingVertical: vs(10),
    gap: vs(10),
    borderTopWidth: 1,
    borderTopColor: appColors.lightGray,
    paddingHorizontal: s(12),
  },
  totalRowContainer: {
    gap: vs(10),
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalOrderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: s(1),
    borderTopColor: appColors.lightGray,
    paddingVertical: vs(4),
  },
  OrderTotalNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: vs(7),
    minWidth: "40%",
  },
});
