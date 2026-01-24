import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/Firebase";
import { TSigninSchema, TSignUpSchema } from "../utils/validation";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp, MainStackNavigationProp } from "../utils/typesAndInterfaces";
import { FirebaseErrorCodes } from "../utils/constants";
import { FirebaseError } from "firebase/app";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/reducers/UserDataSlice";

const useLogin = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigation<MainStackNavigationProp>();
  const dispatch = useDispatch()

  const Login = async (query: TSigninSchema) => {
    try {
      setisLoading(true);
      const { user } = await signInWithEmailAndPassword(
        auth,
        query.email,
        query.password,
      );
      // console.log(JSON.stringify(result, null, 3));
      if (user.uid) {
        dispatch(
          setUserData({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
          }),
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
    //   console.log(JSON.stringify(result, null, 3));
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
