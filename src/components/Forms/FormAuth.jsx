import CustomButton from "../Custom/CustomButton";
import FieldAuth from "./FieldAuth";

const FormAuth = ({fields, title, btnText, textInfo}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{textInfo}</p>
      <ul>
        {fields.map((field, i) => (
          <li key={i + Math.random()}>
            <FieldAuth type={field.type} label={field.label} register={field.register} />
          </li>
        ))}
      </ul>
      <CustomButton>{btnText}</CustomButton>
    </>
  );
};
export default FormAuth;
