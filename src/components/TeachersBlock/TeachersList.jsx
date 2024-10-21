import TeachersCard from "./TeachersCard";

const TeachersList = ({teachers}) => {
  return (
    <ul className="flex flex-col gap-[32px] items-center">
      {teachers.map((teacher, i) => (
        <li
          key={i + Math.random()}
          className="flex gap-[48px] flex-grow p-[24px] max-w-[1184px] relative "
        >
          <TeachersCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
};
export default TeachersList;
