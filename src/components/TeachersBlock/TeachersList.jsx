import TeachersCard from "./TeachersCard";

const TeachersList = ({teachers}) => {
  return (
    <ul>
      {teachers.map((teacher, i) => (
        <li key={i + Math.random()}>
          <TeachersCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
};
export default TeachersList;
