import CustomModal from "../Custom/CustomModal";
import SignInForm from "../Forms/SignInForm";

const SignInModal = ({isOpen, onClose}) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <SignInForm onClose={onClose} />
    </CustomModal>
  );
};
export default SignInModal;
