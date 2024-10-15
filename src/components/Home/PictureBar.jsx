import IMac from "../Icon/IMac";

const PictureBar = () => {
  return (
    <div className="w-full min-[1440px]:w-[568px] bg-[var(--hover-color)] rounded-[30px] relative">
      <div className="min-[1440px]:w-[361px] h-[176px] liner_gradient absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <IMac />
        </div>
      </div>
    </div>
  );
};
export default PictureBar;
