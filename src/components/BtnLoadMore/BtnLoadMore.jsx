import CustomButton from "../../components/Custom/CustomButton";

const BtnLoadMore = ({onClick}) => {
  return (
    <div className="w-[183px] mb-[96px] mx-auto">
      <CustomButton onClick={onClick}>Load More</CustomButton>
    </div>
  );
};
export default BtnLoadMore;
