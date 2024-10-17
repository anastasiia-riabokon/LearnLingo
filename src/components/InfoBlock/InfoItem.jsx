const InfoItem = ({item}) => {
  return (
    <>
      <p className="font-medium leading-[1.14] text-[28px]">{item.qty}</p>
      <p className="text-[14px] leading-[1.29] w-[74px] text-[var(--text-info)]">{item.text}</p>
    </>
  );
};
export default InfoItem;
