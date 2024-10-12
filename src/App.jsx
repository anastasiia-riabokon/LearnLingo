import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllTeachers} from "./redux/teachers/operations";
import * as selectorTeachers from "./redux/teachers/selectors";

function App() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectorTeachers.selectorTeacher);
  const isLoading = useSelector(selectorTeachers.selectorIsLoading);
  const msgError = useSelector(selectorTeachers.selectorErrorMS);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <div>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
