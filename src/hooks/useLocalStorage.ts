import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react";

interface StorageQuery{
    value: string;
    key: string;
}

export default function useLocalStorage() {

    const [isAsyncLoading, setIsAsyncLoading] = useState(false);
  
    const storeData = async (query: StorageQuery) => {
        try {
          setIsAsyncLoading(true)
        await AsyncStorage.setItem(query.key, query.value);
      } catch (e) {
          // saving error
          console.error(e)
        } finally {
            setIsAsyncLoading(false);
      }
    };
    const removeData = async (key: string) => {
        try {
          setIsAsyncLoading(true);
          await AsyncStorage.removeItem(key);
        } catch (e) {
          // saving error
          console.error(e);
        } finally {
          setIsAsyncLoading(false);
        }
    };

    return { storeData, removeData, isAsyncLoading };
}
