import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormAuth from "./FormAuth";
import {useDispatch} from "react-redux";
import {signUpUser} from "../../redux/auth/operations";
import {schemaRegister} from "../../helpers/validateSchema";
import toast from "react-hot-toast";
import {style} from "../../helpers/styleToast";

const SignUpForm = ({onClose}) => {
  const {
    reset,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaRegister)});
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      await dispatch(signUpUser(user)).unwrap();

      toast(`Welcome ${data.name}!`, {
        icon: "👏",
        style: style,
      });
      reset();
      onClose();
    } catch (error) {
      if (error === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use", {style: style});
      } else {
        const msg = error.replace(/^Firebase:\s*/, "").replace(/\s*\(.*?\)\.$/, "");
        toast.error(msg, {style: style});
      }
    }
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
