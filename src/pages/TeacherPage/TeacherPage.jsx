import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TeachersList from "../../components/TeachersBlock/TeachersList";
import {selectorIsLoading, selectorTeacher} from "../../redux/teachers/selectors";
import {getFilterTeachers} from "../../redux/teachers/operations";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import FilterBar from "../../components/FilterBar/FilterBar";
import Notification from "../../components/TeachersBlock/Notification";

const TeacherPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectorTeacher);
  const isLoading = useSelector(selectorIsLoading);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);
  const [limit] = useState(3);
  const [filters, setFilters] = useState({lang: null, level: null, price: null});

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (filters.lang !== null || filters.level !== null || filters.price !== null) {
      setPage(1);
      setResult([]);
    }
  }, [filters]);

  useEffect(() => {
    dispatch(getFilterTeachers({page, limit, filter: filters}))
      .unwrap()
      .then((response) => {
        if (page === 1) {
          setResult(response.teachers);
        } else {
          setResult((prev) => [...prev, ...response.teachers]);
        }
      });
  }, [dispatch, page, filters]);

  if (isLoading) return <div>Loading</div>;

  const isShowLoadMore = result?.length < teachers.totalCount;
  return (
    <div>
      <FilterBar setFilters={setFilters} filters={filters} />
      <TeachersList teachers={result} />

      {result?.length === 0 && <Notification>Not Found</Notification>}

      {isShowLoadMore && <BtnLoadMore onClick={handleLoadMore} />}
    </div>
  );
};
export default TeacherPage;
