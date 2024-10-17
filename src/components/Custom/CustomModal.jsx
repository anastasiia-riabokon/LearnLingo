import Modal from "react-modal";
import {useSelector} from "react-redux";
import {selectorTheme} from "../../redux/theme/selectors";

Modal.setAppElement("#root");

const CustomModal = ({children, isOpen, onClose}) => {
  const theme = useSelector(selectorTheme);
  const customStyles = {
    content: {
      boxShadow: "0 4px 50px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "30px",
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
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {children}
    </Modal>
  );
};
export default CustomModal;
