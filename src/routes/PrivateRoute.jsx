import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {selectorIsLoggedIn} from "../redux/auth/selectors";

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={"/"} state={location} />;
};
export default PrivateRoute;
