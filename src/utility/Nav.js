import { NavLink } from "react-router-dom";
import userContext from "../userContext";
import { useContext } from "react";

/** Renders Nav
 *
 * Prop:
 * - logout fn
 *
 * Event:
 * - loggedIn fn
 * - loggedOut fn
 *
 * App -> Nav
 */
function Nav({ logout }) {
  const { user } = useContext(userContext);

  /**Return navlinks to be displayed when logged in */
  function loggedIn() {
    return (
      <>
        <NavLink className="nav-link" to={"/companies"}>
          Companies
        </NavLink>
        <NavLink className="nav-link" to={"/jobs"}>
          Jobs
        </NavLink>
        <NavLink className="nav-link" to={"/profile"}>
          Profile
        </NavLink>

        <NavLink className="nav-link" to={"/logout"} onClick={logout}>
          Logout {user.username}
        </NavLink>
      </>
    );
  }

  /**Return navlinks to be displayed when logged out */
  function loggedOut() {
    return (
      <>
        <NavLink className="nav-link" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="nav-link" to={"/signup"}>
          Signup
        </NavLink>
      </>
    );
  }

  return (
    <div className="Nav navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="nav-link navbar-brand" to={"/"}>
          Jobly
        </NavLink>
        <div className="navbar-nav">
          {user !== null ? loggedIn() : loggedOut()}
        </div>
      </div>
    </div>
  );
}

export default Nav;
