import FieldPassword from "./FieldPassword";

const FieldAuth = ({type, label, register}) => {
  if (type === "password") return <FieldPassword label={label} register={register} />;
  return (
    <label className="group_label">
      <p className="label">{label}</p>
      <input
        type={type}
        {...register}
        className="pl-[64px] min-[768px]:pl-[76px] pr-[18px] field"
      />
    </label>
  );
};
export default FieldAuth;
