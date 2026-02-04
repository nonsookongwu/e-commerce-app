import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "../../utils/constants";
import { appColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import SubTitleText from "../../Components/CustomTexts/SubTitleText";
import SmallText from "../../Components/CustomTexts/SmallText";
import { formatAmount, formatDate } from "../../utils/helperFunctions";
import useGetLanguage from "../../hooks/useGetLanguage";


interface Props {
  totalPrice: number;
  price: number;
  date: number;
}

const OrderCard = ({ totalPrice, price, date }: Props) => {
  const { countryCode, totals_currency } = useGetLanguage();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SmallText fontFamily="Bold">ORDER DETAILS:</SmallText>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomRow}>
          <SmallText fontFamily="Medium">
            Total Price:{" "}
            {formatAmount(totalPrice, countryCode, totals_currency)}
          </SmallText>
          <SmallText fontFamily="Medium" textColor="red">
            {formatAmount(price, countryCode, totals_currency)}
          </SmallText>
        </View>
        <View style={styles.bottomRow}>
          <SmallText fontFamily="Medium">Date: {formatDate(date)}</SmallText>
          {/* <SmallText fontFamily="Medium" textColor="red">
            {formatDate(date)}
          </SmallText> */}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    ...commonStyles.shadow,
    backgroundColor: "#fff",
    borderRadius: s(10),
    padding: s(10),
    gap: vs(5),
  },
  topContainer: {
    width: "100%",
    borderBottomColor: appColors.midGray,
    borderBottomWidth: s(1),
    // paddingHorizontal: s(7),
    paddingVertical: vs(2),
  },
  bottomContainer: {
    width: "100%",
    gap: vs(2),
  },
  bottomRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red"
  },
});
