import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import FormAuth from "./FormAuth";
import {signInUser} from "../../redux/auth/operations";
import {schemaLogin} from "../../helpers/validateSchema";
import {style} from "../../helpers/styleToast";

const SignInForm = ({onClose}) => {
  const dispatch = useDispatch();
  const {
    reset,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaLogin)});

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      await dispatch(signInUser(user)).unwrap();
      reset();
      toast("Welcome back!", {
        icon: "👏",
        style: style,
      });
      onClose();
    } catch (error) {
      if (error === "Firebase: Error (auth/invalid-credential).") {
        toast.error("Email or password wrong", {style: style});
      } else {
        const msg = error.replace(/^Firebase:\s*/, "").replace(/\s*\(.*?\)\.$/, "");
        toast.error(msg, {style: style});
      }
    }
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
