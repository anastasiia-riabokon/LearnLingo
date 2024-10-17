import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormAuth from "./FormAuth";
import {signInUser} from "../../redux/auth/operations";
import {schemaLogin} from "../../helpers/validateSchema";

const SignInForm = ({onClose}) => {
  const dispatch = useDispatch();
  const {
    reset,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaLogin)});

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    dispatch(signInUser(user));

    reset();
    onClose();
  };
  return (
    <div>
      <FormAuth
        onSubmit={handleSubmit(onSubmit)}
        title={"Log In"}
        errors={errors}
        textInfo={
          "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
        }
        btnText={"Log In"}
        fields={[
          {label: "Email", type: "text", register: register("email")},
          {label: "Password", type: "password", register: register("password")},
        ]}
      />
    </div>
  );
};
export default SignInForm;
