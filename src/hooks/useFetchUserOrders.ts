import {
  collection,
  doc,
  DocumentData,
  getDocs,
  SnapshotOptions,
} from "firebase/firestore";
import { auth, db } from "../config/Firebase";
import { useQuery } from "@tanstack/react-query";
import { Order, Product } from "../utils/typesAndInterfaces";



 const fetchUserOrders = async (): Promise<Order[] | undefined> => {
   try {
     const fireBaseUserID = auth.currentUser?.uid;
     if (!fireBaseUserID) return;

     const orderRef = collection(doc(db, "users", fireBaseUserID), "orders");

     const snapshot = await getDocs(orderRef);

     return snapshot.docs.map((doc) => ({
       id: doc.id,
       ...(doc.data() as Omit<Order, "id">),
     }));
   } catch (error) {
     console.log(error);
     //  throw new Error(error);
   }
 };

const useGetProductsData = () => {

  return useQuery<Order[] | undefined>({
    queryKey: ["orders"],
    queryFn: fetchUserOrders,
    retry: false,
  });
}

export default useGetProductsData
