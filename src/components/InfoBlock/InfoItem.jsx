const InfoItem = ({item}) => {
  return (
    <>
      <p className="font-medium leading-[1.14] text-[28px]">{item.qty}</p>
      <p className="text-[14px] leading-[1.29] text-[rgba(18,20,23,0.7)] w-[74px]">{item.text}</p>
    </>
  );
};
export default InfoItem;
