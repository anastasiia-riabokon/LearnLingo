import InfoItem from "./InfoItem";

const InfoList = ({items}) => {
  return (
    <ul className="flex gap-y-[24px] gap-x-[100px] flex-wrap justify-center min-[1440px]:justify-between">
      {items.map((item, i) => (
        <li key={i + Math.random()} className="flex gap-[16px]">
          <InfoItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default InfoList;
