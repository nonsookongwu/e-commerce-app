import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { vs, s } from 'react-native-size-matters'
import CustomButton from '../../Components/CustomButton'
import SubTitleText from '../../Components/CustomTexts/SubTitleText'
import { appColors } from '../../styles/colors'

const TotalView = () => {
     const paymentSummary = [
       { id: 1, label: "Order Total", value: "$1237.00" },
       { id: 2, label: "Taxes & Fees", value: "$60.00" },
       { id: 3, label: "Shipping Fees", value: "$10.00" },
     ];
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
                  <SubTitleText>$12345</SubTitleText>
                </View>
              </View>
              <CustomButton buttonText="Continue" bgColor={appColors.black} />
            </View>
  )
}

export default TotalView

const styles = StyleSheet.create({
  totalContainer: {
    // height: vs(200),
    backgroundColor: appColors.white,
    paddingVertical: vs(10),
    gap: vs(10),
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
    borderTopWidth: s(1),
    borderTopColor: appColors.lightGray,
    paddingVertical: vs(7),
    minWidth: "40%",
  },
});