import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import FormAuth from "./FormAuth";
import {signInUser} from "../../redux/auth/operations";

const SignInForm = ({onClose}) => {
  const dispatch = useDispatch();
  const {reset, handleSubmit, register} = useForm();

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
        textInfo={
          "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
        }
        btnText={"Log In"}
        fields={[
          {label: "email", type: "text", register: register("email")},
          {label: "password", type: "password", register: register("password")},
        ]}
      />
    </div>
  );
};
export default SignInForm;
