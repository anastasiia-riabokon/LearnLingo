import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import {selectorIsCurrent} from "./redux/auth/selectors";
import {currentUser} from "./redux/auth/operations";

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
        <Route
          path="/sign_up"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/sign_in"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
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
    </Routes>
  );
}

export default App;
