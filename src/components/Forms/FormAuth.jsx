import CustomButton from "../Custom/CustomButton";
import FieldAuth from "./FieldAuth";

const FormAuth = ({fields, title, btnText, textInfo, onSubmit, errors}) => {
  return (
    <form onSubmit={onSubmit} className="max-w-[438px]">
      <h2 className="text-[32px] min-[768px]:text-[40px] font-medium leading-[1.2] mb-[20px]">
        {title}
      </h2>
      <p className="text-[var(--text-form))] leading-[1.375] mb-[40px]">{textInfo}</p>
      <ul className="flex flex-col gap-[24px] mb-[40px]">
        {fields.map((field, i) => (
          <li key={i + Math.random()}>
            <FieldAuth type={field.type} label={field.label} register={field.register} />
            {errors[field.register.name] && (
              <p className="absolute text-red-700 text-[14px] px-[18px]">
                {errors[field.register.name].message}
              </p>
            )}
          </li>
        ))}
      </ul>
      <CustomButton type={"submit"}>
        <p className="text-[--text-btn] leading-[1.67] font-bold min-[768px]:text-[18px]">
          {btnText}
        </p>
      </CustomButton>
    </form>
  );
};
export default FormAuth;
