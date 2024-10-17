import CustomModal from "../Custom/CustomModal";
import SignUpForm from "../Forms/SignUpForm";

const SignUpModal = ({isOpen, onClose}) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <SignUpForm onClose={onClose} />
    </CustomModal>
  );
};
export default SignUpModal;
