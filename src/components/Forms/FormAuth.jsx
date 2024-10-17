import CustomButton from "../Custom/CustomButton";
import FieldAuth from "./FieldAuth";

const FormAuth = ({fields, title, btnText, textInfo, onSubmit, errors}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-[40px] font-medium leading-[1.2] mb-[20px]">{title}</h2>
      <p className="text-[rgba(18,20,23,0.8)] leading-[1.375] mb-[40px]">{textInfo}</p>
      <ul>
        {fields.map((field, i) => (
          <li key={i + Math.random()}>
            <FieldAuth type={field.type} label={field.label} register={field.register} />
            {errors[field.register.name] && <p>{errors[field.register.name].message}</p>}
          </li>
        ))}
      </ul>
      <CustomButton>{btnText}</CustomButton>
    </form>
  );
};
export default FormAuth;
