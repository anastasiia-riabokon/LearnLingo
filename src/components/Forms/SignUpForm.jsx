import {useForm} from "react-hook-form";
import FormAuth from "./FormAuth";
import {useDispatch} from "react-redux";
import {signUpUser} from "../../redux/auth/operations";

const SignUpForm = ({onClose}) => {
  const {reset, handleSubmit, register} = useForm();
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
      textInfo={
        "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      }
      btnText={"Sign Up"}
      fields={[
        {label: "name", type: "text", register: register("name")},
        {label: "email", type: "text", register: register("email")},
        {label: "password", type: "password", register: register("password")},
      ]}
    />
  );
};
export default SignUpForm;
