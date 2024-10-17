import {useState} from "react";
import Icon from "../Icon/Icon";

const FieldPassword = ({label, register}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setIsShowPassword((prev) => !prev);
  };

  return (
    <label>
      <span className="group_label">
        <p className="label">{label}</p>
        <input
          type={isShowPassword ? "text" : "password"}
          {...register}
          className="field pl-[88px] min-[768px]:pl-[108px] pr-[42px]"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute centering-axisY right-[18px]"
        >
          <Icon
            name={isShowPassword ? "eye" : "eye-blocked"}
            w={20}
            h={20}
            fill={"var(--icon-color)"}
          />
        </button>
      </span>
    </label>
  );
};
export default FieldPassword;
