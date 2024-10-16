const FieldAuth = ({type, label, register}) => {
  return (
    <label>
      <p>{label}</p>
      <input type={type} register={register} />
    </label>
  );
};
export default FieldAuth;
