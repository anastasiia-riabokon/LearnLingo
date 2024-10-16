import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {selectorIsLoggedIn} from "../redux/auth/selectors";

const PublicRoute = ({children}) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? <Navigate to={location.state || "/teachers"} replace /> : children;
};
export default PublicRoute;
