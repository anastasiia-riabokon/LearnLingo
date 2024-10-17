import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {IoMdMenu} from "react-icons/io";

import {selectorIsLoggedIn} from "../../redux/auth/selectors";
import {selectorTheme} from "../../redux/theme/selectors";

import Icon from "../Icon/Icon";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Logo from "../Logo/Logo";
import CustomButton from "../Custom/CustomButton";
import CustomNavLink from "../Custom/CustomNavLink";
import MenuModal from "../MenuModal/MenuModal";
import {logoutUser} from "../../redux/auth/operations";
import SignInModal from "../Modal/SignInModal";
import SignUpModal from "../Modal/SignUpModal";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const theme = useSelector(selectorTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    setIsOpenMenu(false);
  };

  const handleSignIn = () => {
    setIsOpenSignIn(true);
  };
  const handleSignUp = () => {
    setIsOpenSignUp(true);
  };

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
            {isLoggedIn && (
              <li>
                <CustomNavLink to="/favorite">Favorite</CustomNavLink>
              </li>
            )}
          </ul>
          {isLoggedIn ? (
            <button className="flex items-center gap-2 max-[767px]:hidden" onClick={handleLogout}>
              <Icon name={"log"} w={20} h={20} className="stroke-[var(--color)]" fill={"none"} />
              <p className="leading-[1.25] font-bold">Log out</p>
            </button>
          ) : (
            <ul className="flex gap-4 items-center leading-[1.25] font-bold max-[767px]:hidden">
              <li>
                <button onClick={handleSignIn} className="flex items-center gap-2">
                  <Icon
                    name={"log"}
                    w={20}
                    h={20}
                    className=" stroke-[var(--color)]"
                    fill={"none"}
                  />
                  <p>Log in</p>
                </button>
              </li>
              <li>
                <CustomButton
                  onClick={handleSignUp}
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
            <IoMdMenu w={24} />
          </button>
        </nav>
      </header>

      <div className="min-[768px]:hidden">
        <MenuModal
          isOpen={isOpenMenu}
          onClose={() => setIsOpenMenu(false)}
          onClick={handleLogout}
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
        />
      </div>

      <SignInModal isOpen={isOpenSignIn} onClose={() => setIsOpenSignIn(false)} />
      <SignUpModal isOpen={isOpenSignUp} onClose={() => setIsOpenSignUp(false)} />
    </>
  );
};
export default NavBar;
