import {Link} from "react-router-dom";

const CustomButton = ({to, width, properties, type, children}) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`${properties} rounded-xl flex justify-center`}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`w-[${width}] bg-[var(--color)] hover:bg-[var(--hover-color)] py-4 rounded-xl`}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default CustomButton;
