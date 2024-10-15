import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import {IoMdMenu} from "react-icons/io";

import {selectorIsLoading} from "../../redux/auth/selectors";
import {selectorTheme} from "../../redux/theme/selectors";

import Icon from "../Icon/Icon";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Logo from "../Logo/Logo";
import CustomButton from "../Custom/CustomButton";
import CustomNavLink from "../Custom/CustomNavLink";
import MenuModal from "../MenuModal/MenuModal";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoading);
  const theme = useSelector(selectorTheme);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header className="pt-[30px] pb-[10px] w-full flex justify-center items-center px-4">
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
                  properties={`py-[14px] bg-[var(--main)] w-[166px] ${
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
          <button className="min-[768px]:hidden" onClick={() => setIsOpenMenu(true)}>
            <IoMdMenu size={24} />
          </button>
        </nav>
      </header>
      <div className="min-[768px]:hidden">
        <MenuModal isOpen={isOpenMenu} onClose={() => setIsOpenMenu(false)} />
      </div>
    </>
  );
};
export default NavBar;
