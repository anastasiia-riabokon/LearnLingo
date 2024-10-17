import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PrivateRoute from "./routes/PrivateRoute";
import {selectorIsCurrent} from "./redux/auth/selectors";
import {currentUser} from "./redux/auth/operations";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  const dispatch = useDispatch();
  const isCurrent = useSelector(selectorIsCurrent);

  useEffect(() => {
    dispatch(currentUser());
  }, [isCurrent]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route
          path="/favorite"
          element={
            <PrivateRoute>
              <FavoritePage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
