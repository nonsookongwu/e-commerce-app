import {
  collection,
  DocumentData,
  getDocs,
  SnapshotOptions,
} from "firebase/firestore";
import { db } from "../config/Firebase";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../utils/typesAndInterfaces";



 const fetchProductsData = async (): Promise<Product[] | undefined> => {
  try {

    const snapshot = await getDocs(collection(db, "products"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
        ...(doc.data() as Omit<Product, "id">),
      
    }));
      
  } catch (error) {
    console.log(error);
    //  throw new Error(error);
  }
};

const useGetProductsData = () => {

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
    retry: false,
  });
}

export default useGetProductsData
