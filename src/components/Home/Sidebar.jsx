import CustomButton from "../Custom/CustomButton";

const Sidebar = () => {
  return (
    <div className="min-[1440px]:max-w-[730px] px-[24px] min-[768px]:px-[64px] py-[64px] min-[768px]:py-[98px] bg-[var(--sidebar-bg)]">
      <h1 className="font-medium text-[32px] min-[768px]:text-[48px] leading-[1.17] mb-[32px]">
        Unlock your potential with the&nbsp;best{" "}
        <span
          className="bg-[var(--hover-color)] rounded-xl font-normal italic 
            text-[var(--main)]"
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
        properties="bg-[var(--color)] hover:bg-[var(--hover-color)] text-[var(--text-btn)] py-[14px] min-[768px]:py-4 max-w-[267px] font-bold min-[768px]:text-[18px] "
      >
        Get started
      </CustomButton>
    </div>
  );
};
export default Sidebar;
