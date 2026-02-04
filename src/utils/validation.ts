import * as yup from "yup";
import { store } from "../redux/store";

const language = store.getState().languageSlice.value;

export const signinSchema = yup.object({
  email: yup
    .string()
    .email(language.sign_in_email_invalid)
    .required(language.sign_in_email_required),

  password: yup.string().required(language.sign_in_password_required),
});

export type TSigninSchema = yup.InferType<typeof signinSchema>;

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email(language.sign_up_email_invalid)
    .required(language.sign_up_email_required),

  userName: yup.string().required(language.sign_up_username_required),

  password: yup.string().required(language.sign_up_password_required),
});

export type TSignUpSchema = yup.InferType<typeof signUpSchema>;

export const CheckoutSchema = yup.object({
  fullName: yup.string().required(language.checkout_name_required),
  phoneNumber: yup
    .string()
    .required(language.checkout_phone_required)
    .min(11, language.checkout_phone_min_length)
    .max(11, language.checkout_phone_min_length),
  address: yup.string().required(language.checkout_address_required),
});

export type TCheckoutSchema = yup.InferType<typeof CheckoutSchema>;
