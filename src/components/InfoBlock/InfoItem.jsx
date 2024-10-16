import {useSelector} from "react-redux";
import {selectorTheme} from "../../redux/theme/selectors";

const InfoItem = ({item}) => {
  const theme = useSelector(selectorTheme);
  return (
    <>
      <p className="font-medium leading-[1.14] text-[28px]">{item.qty}</p>
      <p
        className={`text-[14px] leading-[1.29] w-[74px] ${
          theme === "dark" ? "var(--cold-white)" : "text-[rgba(18,20,23,0.7)]"
        }`}
      >
        {item.text}
      </p>
    </>
  );
};
export default InfoItem;
