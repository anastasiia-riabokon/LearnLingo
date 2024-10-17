import * as Yup from "yup";

export const schemaRegister = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be no more than 15 characters"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{6,12}$/,
      "Password must have a number, a letter, and no spaces"
    ),
});

export const schemaLogin = Yup.object({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?!.* ).{6,12}$/,
      "Password must have a number, a letter, and no spaces"
    ),
});
