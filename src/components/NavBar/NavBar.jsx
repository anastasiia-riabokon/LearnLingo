import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {selectorIsLoading} from "../../redux/auth/selectors";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoading);
  return (
    <ul>
      <li>Logo</li>
      <li>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        {isLoggedIn ? (
          <span>
            <Link to="/sign_in">Log out</Link>
          </span>
        ) : (
          <>
            <span>
              <Link to="/sign_in">Log in</Link>
            </span>
            <Link to="/sign_up">Registration</Link>
          </>
        )}
      </li>
    </ul>
  );
};
export default NavBar;
