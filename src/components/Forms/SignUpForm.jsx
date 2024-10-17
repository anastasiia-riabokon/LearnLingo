import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormAuth from "./FormAuth";
import {useDispatch} from "react-redux";
import {signUpUser} from "../../redux/auth/operations";
import {schemaRegister} from "../../helpers/validateSchema";

const SignUpForm = ({onClose}) => {
  const {
    reset,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaRegister)});
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    dispatch(signUpUser(user));
    reset();
    onClose();
  };
  return (
    <FormAuth
      onSubmit={handleSubmit(onSubmit)}
      title={"Registration"}
      errors={errors}
      textInfo={
        "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      }
      btnText={"Sign Up"}
      fields={[
        {label: "Name", type: "text", register: register("name")},
        {label: "Email", type: "text", register: register("email")},
        {label: "Password", type: "password", register: register("password")},
      ]}
    />
  );
};
export default SignUpForm;
