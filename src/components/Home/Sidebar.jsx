import {useSelector} from "react-redux";
import CustomButton from "../Custom/CustomButton";
import {selectorTheme} from "../../redux/theme/selectors";

const Sidebar = () => {
  const theme = useSelector(selectorTheme);
  return (
    <div
      className={`max-w-[730px] px-[24px] min-[768px]:px-[64px] py-[64px] min-[768px]:py-[98px] ${
        theme === "dark" ? "bg-[var(--black)]" : "bg-[var(--cold-white)]"
      }  rounded-[30px]`}
    >
      <h1 className="font-medium text-[32px] min-[768px]:text-[48px] leading-[1.17] mb-[32px]">
        Unlock your potential with the&nbsp;best{" "}
        <span
          className={`bg-[var(--hover-color)] rounded-xl font-normal italic ${
            theme === "dark" && "text-[#121417]"
          }`}
        >
          &nbsp;language&nbsp;
        </span>{" "}
        tutors
      </h1>
      <p className="leading-[1.375] mb-[64px] text-[14px] min-[768px]:text-[16px]">
        Embark on an Exciting Language Journey with Expert Language{" "}
        <span className="min-[768px]:block">
          Tutors: Elevate your language proficiency to new heights by
        </span>{" "}
        connecting with highly qualified and experienced tutors.
      </p>

      <CustomButton
        to={"/teachers"}
        properties={`bg-[var(--color)] hover:bg-[var(--hover-color)] py-[14px] min-[768px]:py-4 max-w-[267px] font-bold ${
          theme === "dark" && "text-[#121417]"
        }`}
      >
        Get started
      </CustomButton>
    </div>
  );
};
export default Sidebar;
