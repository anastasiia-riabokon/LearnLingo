import InfoList from "../InfoBlock/InfoList";

const Info = () => {
  const info = [
    {
      qty: "32,000 +",
      text: "Experienced tutors",
    },
    {
      qty: "300,000 +",
      text: "5-star tutor reviews",
    },
    {
      qty: "120 +",
      text: "Subjects taught",
    },
    {
      qty: "200 +",
      text: "Tutor nationalities",
    },
  ];
  return (
    <div className="w-full custom_dashed py-[40px] rounded-[30px] min-[1440px]:px-[122px]">
      <InfoList items={info} />
    </div>
  );
};
export default Info;
