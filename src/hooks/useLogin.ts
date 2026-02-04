import { useNavigation } from "@react-navigation/native";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { auth } from "../config/Firebase";
import { setUserData } from "../redux/reducers/UserDataSlice";
import { FirebaseErrorCodes } from "../utils/constants";
import { AuthNavigationProp, MainStackNavigationProp } from "../utils/typesAndInterfaces";
import { TSigninSchema, TSignUpSchema } from "../utils/validation";
import useLocalStorage from "./useLocalStorage";

const useLogin = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigation<MainStackNavigationProp>();
  const dispatch = useDispatch()
  const {storeData} = useLocalStorage()

  const Login = async (query: TSigninSchema) => {
    try {
      setisLoading(true);
      const { user } = await signInWithEmailAndPassword(
        auth,
        query.email,
        query.password,
      );

      
      // console.log(JSON.stringify(user, null, 3));
      const userOBJ = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
          }
      if (user.uid) {
        dispatch(
          setUserData(userOBJ),
        );
          navigate.navigate("homeTabs");
      }
    } catch (error: unknown) {
        if (error instanceof FirebaseError) {
            const message = FirebaseErrorCodes[error.code as keyof typeof FirebaseErrorCodes] ??
                "Something went wrong";
            console.log(message);
            showMessage({
                message, type: "danger"
            })
        }
    } finally {
      setisLoading(false);
    }
  };

  return { isLoading, Login };
};

export default useLogin;



export const useSignup = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigation<AuthNavigationProp>();

  const Signup = async (query: TSignUpSchema) => {
    try {
      setisLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        query.email,
        query.password,
      );

      await updateProfile(user, {
        displayName: query.userName
       });
      // console.log(JSON.stringify(result, null, 3));
      if (user.uid) {
        navigate.navigate("login");
      }
    } catch (error: unknown) {
        console.log(error)
      if (error instanceof FirebaseError) {
        const message =
          FirebaseErrorCodes[error.code as keyof typeof FirebaseErrorCodes] ??
          "Something went wrong";
        // console.log(message);
        showMessage({
          message,
          type: "danger",
        });
      }
    } finally {
      setisLoading(false);
    }
  };

  return { isLoading, Signup };
};
