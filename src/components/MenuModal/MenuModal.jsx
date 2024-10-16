import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {selectorIsLoggedIn} from "../../redux/auth/selectors";
import {selectorTheme} from "../../redux/theme/selectors";
import Icon from "../Icon/Icon";
import CustomButton from "../Custom/CustomButton";
import Modal from "react-modal";
import CustomNavLink from "../Custom/CustomNavLink";

Modal.setAppElement("#root");

const MenuModal = ({isOpen, onClose, onClick}) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const theme = useSelector(selectorTheme);

  const customStyles = {
    content: {
      left: "50%",
      top: "0",
      bottom: "0",
      width: "50%",
      boxShadow: "0 4px 50px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "none",
      border: "none",
      padding: "0",
      backgroundColor: theme === "dark" ? "var(--main)" : "var(--cold-white)",
    },
    overlay: {
      backgroundColor: "rgba(47, 47, 47, 0.6)",
      zIndex: "3",
      backdropFilter: "blur(8px)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="relative text-center w-full px-4 py-8 h-full flex flex-col justify-between">
        <button onClick={onClose} className="absolute top-2 left-2">
          <IoMdClose size={22} />
        </button>

        <ul className="flex flex-col gap-[28px]">
          <li onClick={onClose}>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li onClick={onClose}>
            <CustomNavLink to="/teachers">Teachers</CustomNavLink>
          </li>
          {isLoggedIn && (
            <li>
              <CustomNavLink to="/favorite">Favorite</CustomNavLink>
            </li>
          )}
        </ul>

        <div className="w-full">
          {isLoggedIn ? (
            <button className="flex items-center gap-2" onClick={onClick}>
              <Icon name={"log"} w={20} h={20} className="stroke-[var(--color)]" fill={"none"} />
              <p className="leading-[1.25] font-bold">Log out</p>
            </button>
          ) : (
            <ul className="leading-[1.25] font-bold flex flex-col gap-4">
              <li onClick={onClose}>
                <Link to="/sign_in" className="flex items-center justify-center gap-2">
                  <Icon
                    name={"log"}
                    w={20}
                    h={20}
                    className=" stroke-[var(--color)]"
                    fill={"none"}
                  />
                  <p>Log in</p>
                </Link>
              </li>
              <li onClick={onClose}>
                <CustomButton
                  to="/sign_up"
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
        </div>
      </div>
    </Modal>
  );
};
export default MenuModal;
