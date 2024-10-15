import clsx from "clsx";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({to, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx(
      "hover:text-[var(--color)] max-[767px]:text-[18px] transition-color duration-[250ms]",
      isActive && "text-[var(--color)]"
    );
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
