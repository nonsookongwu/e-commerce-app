import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { s, vs } from 'react-native-size-matters'
import { appColors } from '../../styles/colors'
import SmallText from '../../Components/CustomTexts/SmallText'
import { formatAmount } from '../../utils/helperFunctions'
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Product } from '../../utils/typesAndInterfaces'

interface Props {
  product: Product;
}

const CartItem = ({ product }: Props) => {
    const [productCount, setProductCount] = useState(1)

    const handleIncreaseProductCount = () => {
        setProductCount(productCount + 1)
    }
    const handleDecreaseProductCount = () => {
        if (productCount === 1) return;
        setProductCount(productCount - 1)
    }
    


  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.imageURL,
        }}
        style={styles.image}
      />
      <View style={styles.middleContainer}>
        <SmallText lineHeight={16}>{product.title}</SmallText>
        <SmallText fontFamily="SemiBold">
          {formatAmount(product.price)}
        </SmallText>
        <View style={styles.middleInnerContainer}>
          <TouchableOpacity
            style={styles.smallButtons}
            onPress={handleIncreaseProductCount}
          >
            <Entypo name="plus" size={15} color="black" />
          </TouchableOpacity>
          <SmallText>{productCount}</SmallText>
          <TouchableOpacity
            style={styles.smallButtons}
            onPress={handleDecreaseProductCount}
          >
            <Entypo name="minus" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.deleteContainer}>
        <Pressable style={styles.deletePressable}>
          <FontAwesome5 name="trash-alt" size={14} color="red" />
          <SmallText textColor={appColors.midGray} fontFamily="SemiBold">
            Delete
          </SmallText>
        </Pressable>
      </View>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    height: vs(100),
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: appColors.lightGray,
    flexDirection: "row",
    paddingVertical: s(5),
    gap: s(7),
  },
  image: {
    height: "100%",
    width: "25%",
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: "red",
  },
  middleInnerContainer: {
    //   width: "40%",
    //   minWidth: 12,
    gap: s(7),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: appColors.disabledGray,
      alignSelf: "flex-start",
      padding: s(4),
    borderRadius: s(8)
  },
  smallButtons: {
    height: s(20),
    width: s(20),
    borderRadius: 8,
    backgroundColor: appColors.lightGray,
    color: appColors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteContainer: {
      justifyContent: "flex-end",
      paddingBottom: vs(6)
  },
  deletePressable: {
    flexDirection: "row",
    gap: s(5),
    alignSelf: "flex-end",
    alignItems: "center",
  },
});