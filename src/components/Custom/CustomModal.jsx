import Modal from "react-modal";
import Icon from "../Icon/Icon";

Modal.setAppElement("#root");

const CustomModal = ({children, isOpen, onClose}) => {
  const customStyles = {
    content: {
      boxShadow: "0 4px 50px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "30px",
      border: "none",
      padding: "0",
      margin: "auto",
      backgroundColor: "var(--modal-color)",
      width: "fit-content",
      height: "fit-content",
      overflow: "auto",
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
      <div className="p-[32px] min-[768px]:p-[64px]">
        <button onClick={onClose}>
          <Icon
            name={"x"}
            w={32}
            h={32}
            stroke={"var(--icon-color)"}
            className="absolute top-[10px] right-[10px] min-[768px]:top-[20px] min-[768px]:right-[20px]"
          />
        </button>
        <div>{children}</div>
      </div>
    </Modal>
  );
};
export default CustomModal;
