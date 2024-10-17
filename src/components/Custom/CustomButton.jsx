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
              ? `${properties} py-4 rounded-xl`
              : `bg-[var(--color)] hover:bg-[var(--hover-color)] py-4 rounded-xl`
          }
        >
          {children}
        </button>
      )}
    </>
  );
};
export default CustomButton;
