import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TCheckoutSchema } from "../utils/validation";
import { CartNavigationProp, Product, ProfileNavigationProp } from "../utils/typesAndInterfaces";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/reducers/CardSlice";

interface query{
    data: TCheckoutSchema;
    items: Product[];
    totalProductsPricesSum: number | undefined;
    createdAt: Date;
    totalPrice: number | undefined;
    userID: string;
    
}

export const usePlaceOrder = () => {
    const queryClient = useQueryClient();
    const navigation = useNavigation<ProfileNavigationProp>();
    const dispatch = useDispatch()

    const placeOrder = async (orderBody: query) => {
        const { createdAt, data, items, totalPrice, totalProductsPricesSum, userID} = orderBody;
    const payload = {
      createdAt,
      ...data,
      items,
      totalPrice,
      totalProductsPricesSum,
    };
    try {
        const userOrderRef = collection(doc(db, "users", userID), "orders")
        await addDoc(userOrderRef, payload);

        const orderRef = collection(db, "orders")
        await addDoc(orderRef, payload);
        
    } catch (error) {
      console.error(error)
    }
  };
  return useMutation<
    unknown,
    Error,
      query,
    Product
  >({
    mutationFn: async (variable) => placeOrder(variable),
    onSuccess: (_data, _variable) => {
        showMessage({ type: "success", message: "Order Placed Successfully" })
        navigation.navigate("myOrderScreen");
        dispatch(emptyCart())
       
    },
    onError: (_error, _variable, _context) => {
      //the context is what onmutate returned
      //variable is what we pass to the mutate function
      showMessage({ type: "danger", message: "Order failed" });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
