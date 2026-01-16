import * as yup from "yup";

export const signinSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});

export type TSigninSchema = yup.InferType<typeof signinSchema>;

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
        .required("Email is required"),
    
  userName: yup
    .string()
    .required("User name is required"),

  password: yup.string().required("Password is required"),
});

export type TSignUpSchema = yup.InferType<typeof signUpSchema>;


export const CheckoutSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  address: yup.string().required("Address is required"),
});

export type TCheckoutSchema = yup.InferType<typeof CheckoutSchema>;
