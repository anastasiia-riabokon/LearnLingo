import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {IoMdMenu} from "react-icons/io";
import {selectorIsLoading} from "../../redux/auth/selectors";
import Icon from "../Icon/Icon";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Logo from "../Logo/Logo";
import CustomButton from "../Custom/CustomButton";
import {selectorTheme} from "../../redux/theme/selectors";
import CustomNavLink from "../Custom/CustomNavLink";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoading);
  const theme = useSelector(selectorTheme);
  return (
    <header className="py-[10px] w-full flex justify-center items-center px-4">
      <nav className="flex justify-between flex-row items-center flex-grow w-full max-w-[1184px] flex-wrap">
        <div className="flex gap-4 ">
          <Logo />
          <SwitchTheme />
        </div>

        <ul className="flex gap-[28px] max-[767px]:hidden">
          <li>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/teachers">Teachers</CustomNavLink>
          </li>
        </ul>
        <button className="min-[768px]:hidden">
          <IoMdMenu size={24} />
        </button>
        {isLoggedIn ? (
          <button className="flex items-center gap-2 max-[767px]:hidden">
            <Icon name={"log"} size={8} className="stroke-[var(--color)]" fill={"none"} />
            <p className="leading-[1.25] font-bold">Log out</p>
          </button>
        ) : (
          <ul className="flex gap-4 items-center leading-[1.25] font-bold max-[767px]:hidden">
            <li>
              <Link to="/sign_in" className="flex items-center gap-2">
                <Icon name={"log"} size={20} className=" stroke-[var(--color)]" fill={"none"} />
                <p>Log in</p>
              </Link>
            </li>
            <li>
              <CustomButton
                to="/sign_up"
                width={166}
                properties={`py-[14px] bg-[var(--main)] ${
                  theme === "dark"
                    ? "bg-[var(--white)] text-[var(--main)]"
                    : "bg-[var(--main)] text-[var(--white)]"
                }`}
              >
                Registration
              </CustomButton>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default NavBar;
