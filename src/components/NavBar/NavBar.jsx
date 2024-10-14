import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {selectorIsLoading} from "../../redux/auth/selectors";
import Icon from "../Icon/Icon";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const NavBar = () => {
  const isLoggedIn = useSelector(selectorIsLoading);
  return (
    <div>
      <p>Logo</p>
      <SwitchTheme />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/teachers">Teachers</NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="">
              <Icon name={"log"} size={8} className="stroke-[var(--color)]" fill={"none"} />
              <p>Log out</p>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/sign_in">
                <Icon name={"log"} size={8} className=" stroke-[var(--color)]" fill={"none"} />
                <p>Log in</p>
              </Link>
            </li>
            <li>
              <Link to="/sign_up">Registration</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default NavBar;
