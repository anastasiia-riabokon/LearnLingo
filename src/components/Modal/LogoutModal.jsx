import CustomButton from "../Custom/CustomButton";
import CustomModal from "../Custom/CustomModal";

const LogoutModal = ({isOpen, onClose, handleLogout}) => {
  const onLogOut = () => {
    handleLogout();
    onClose();
  };
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="w-full min-[425px]:w-[320px]">
        <h2 className="text-[32px] min-[768px]:text-[40px] font-medium leading-[1.2] mb-[20px]">
          Log out
        </h2>
        <p className="text-[var(--text-form))] leading-[1.375] mb-[40px]">
          Do you really want to leave?
        </p>
        <span className="flex gap-[16px] flex-col min-[768px]:flex-row">
          <CustomButton onClick={onLogOut}>Log out</CustomButton>
          <CustomButton
            onClick={onClose}
            properties="py-[14px] bg-[var(--register-btn-bg)] hover:bg-[var(--gray)] text-[var(--register-btn-text)] hover:text-[var(--register-btn-bg)] py-[14px] w-full"
          >
            Cancel
          </CustomButton>
        </span>
      </div>
    </CustomModal>
  );
};
export default LogoutModal;
