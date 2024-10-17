import {Link} from "react-router-dom";

const CustomButton = ({to, properties, type, children, onClick}) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`${properties} rounded-xl flex justify-center`}>
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={
            properties
              ? `${properties} py-[14px] min-[768px]:py-[16px] rounded-xl font-bold`
              : `bg-[var(--color)] hover:bg-[var(--hover-color)] py-[14px] min-[768px]:py-[16px] rounded-xl w-full text-[--text-btn] font-bold`
          }
        >
          {children}
        </button>
      )}
    </>
  );
};
export default CustomButton;
