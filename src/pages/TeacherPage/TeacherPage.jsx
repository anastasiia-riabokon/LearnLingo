import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TeachersList from "../../components/TeachersBlock/TeachersList";
import {selectorIsLoading, selectorTeacher} from "../../redux/teachers/selectors";
import {getAllTeachers} from "../../redux/teachers/operations";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";

const TeacherPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectorTeacher);
  const isLoading = useSelector(selectorIsLoading);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);
  const [limit] = useState(3);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (teachers.teachers?.length > 0) {
      setResult((prev) => [...prev, ...teachers.teachers]);
    }
    setIsShowLoadMore(result.length + limit < teachers.totalCount);
  }, [teachers]);

  useEffect(() => {
    dispatch(getAllTeachers({page, limit}));
  }, [dispatch, page]);

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <TeachersList teachers={result} />

      {isShowLoadMore && <BtnLoadMore onClick={handleLoadMore} />}
    </div>
  );
};
export default TeacherPage;
