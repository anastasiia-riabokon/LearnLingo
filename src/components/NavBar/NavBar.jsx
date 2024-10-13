import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {selectorIsLoading} from "../../redux/auth/selectors";
import Icon from "../Icon/Icon";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoading);
  return (
    <ul>
      <li>Logo</li>
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        {isLoggedIn ? (
          <Link to="">
            <Icon name={"log"} size={8} className=" stroke-[var(--color)]" fill={"none"} />
            <p>Log out</p>
          </Link>
        ) : (
          <>
            <Link to="/sign_in">
              <Icon name={"log"} size={8} className=" stroke-[var(--color)]" fill={"none"} />
              <p>Log in</p>
            </Link>

            <Link to="/sign_up">Registration</Link>
          </>
        )}
      </li>
    </ul>
  );
};
export default NavBar;
