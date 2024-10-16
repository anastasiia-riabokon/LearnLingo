import IMac from "../Icon/IMac";
import img from "../../img/smiling_women.png";

const PictureBar = () => {
  return (
    <div className="w-full h-[530px] min-[1440px]:w-[568px] bg-[var(--hover-color)] rounded-[30px] relative pt-[140px] min-[375px]:pt-[96px] min-[425px]:pt-[80px]">
      <img
        src={img}
        alt="smiling women"
        className="centering-axisX min-[1440px]:bottom-[111px] min-[1440px]:max-w-[339px]"
        width={339}
      />
      <div className="w-full max-w-[361px] min-[1440px]:w-[361px] h-[176px] liner_gradient centering-axisX bottom-0 rounded-t-[8px]">
        <div className="centering-axisXY">
          <IMac />
        </div>
      </div>
    </div>
  );
};
export default PictureBar;
