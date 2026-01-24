import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import SubTitleText from "./CustomTexts/SubTitleText";
import { formatAmount } from "../utils/helperFunctions";
import SmallText from "./CustomTexts/SmallText";
import CartButton from "./CartButton";
import { commonStyles } from "../utils/constants";
import { Product } from "../utils/typesAndInterfaces";
import { useAppDispatch } from "../redux/store";
import { addItemToCart } from "../redux/reducers/CardSlice";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    showMessage({
      message: `${product.title} added to cart successfully`,
      type: "info",
    });
  };

  return (
    <View style={styles.container}>
      <CartButton cartFn={handleAddToCart} />
      <Image
        style={styles.image}
        source={{
          uri: product.imageURL,
        }}
      />
      <View style={styles.bottomContainer}>
        <SmallText lineHeight={14} fontFamily="Regular">
          {product.title}
        </SmallText>
        <SmallText lineHeight={14} fontFamily="Bold">
          {formatAmount(product.price)}
        </SmallText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: vs(190),
    width: s(158),
    // width: "48%",
    // maxWidth: "50%",
    backgroundColor: "#fff",
    borderRadius: s(10),
    paddingVertical: vs(7),
    paddingHorizontal: s(10),
    ...commonStyles.shadow,
    // borderWidth: 1,
    //   borderColor: "red",
  },
  image: {
    height: vs(100),
    width: "100%",
    resizeMode: "contain",
  },
  bottomContainer: {
    // height: "100%",
    flex: 1,
    justifyContent: "center",
    gap: vs(2),
  },
});
