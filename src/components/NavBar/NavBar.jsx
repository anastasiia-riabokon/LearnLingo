import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {IoMdMenu} from "react-icons/io";

import {selectorIsLoggedIn} from "../../redux/auth/selectors";

import Icon from "../Icon/Icon";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Logo from "../Logo/Logo";
import CustomButton from "../Custom/CustomButton";
import CustomNavLink from "../Custom/CustomNavLink";
import MenuModal from "../MenuModal/MenuModal";
import {signOutUser} from "../../redux/auth/operations";
import SignInModal from "../Modal/SignInModal";
import SignUpModal from "../Modal/SignUpModal";
import LogoutModal from "../Modal/LogoutModal";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSignOut, setIsOpenSignOut] = useState(false);

  const handleLogout = () => {
    dispatch(signOutUser());
    navigate("/");
    setIsOpenMenu(false);
  };

  const handleSignIn = () => {
    setIsOpenSignIn(true);
  };
  const handleSignUp = () => {
    setIsOpenSignUp(true);
  };

  const handleSignOut = () => {
    setIsOpenSignOut(true);
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
            <button className="flex items-center gap-2 max-[767px]:hidden" onClick={handleSignOut}>
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
                  properties="py-[14px] bg-[var(--register-btn-bg)] hover:bg-[var(--gray)] text-[var(--register-btn-text)] hover:text-[var(--register-btn-bg)] py-[14px] w-[166px]"
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
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          onClick={handleSignOut}
        />
      </div>

      <SignInModal isOpen={isOpenSignIn} onClose={() => setIsOpenSignIn(false)} />
      <SignUpModal isOpen={isOpenSignUp} onClose={() => setIsOpenSignUp(false)} />
      <LogoutModal
        isOpen={isOpenSignOut}
        onClose={() => setIsOpenSignOut(false)}
        handleLogout={handleLogout}
      />
    </>
  );
};
export default NavBar;
