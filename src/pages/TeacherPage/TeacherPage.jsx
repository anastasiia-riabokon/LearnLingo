import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TeachersList from "../../components/TeachersBlock/TeachersList";
import {selectorTeacher} from "../../redux/teachers/selectors";
import {getAllTeachers} from "../../redux/teachers/operations";

const TeacherPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectorTeacher);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <div>
      <TeachersList teachers={teachers} />
    </div>
  );
};
export default TeacherPage;
