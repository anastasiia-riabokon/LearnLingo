import TeachersCard from "./TeachersCard";

const TeachersList = ({teachers}) => {
  return (
    <ul className="flex flex-col gap-[32px] items-center">
      {teachers.map((teacher, i) => (
        <li
          key={i + Math.random()}
          className="relative flex gap-[48px] flex-wrap p-[24px] w-full max-w-[1184px] rounded-[24px] bg-[var(--sidebar-bg)]"
        >
          <TeachersCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
};
export default TeachersList;
