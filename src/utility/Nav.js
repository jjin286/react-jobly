import { NavLink } from "react-router-dom";
import userContext from "../userContext";
import { useContext } from "react";

/** Renders Nav
 *
 * Prop:
 * - logout fn
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-to-collapse"
          aria-controls="navbar-to-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar-to-collapse">
          <div className="navbar-nav ms-auto">
            {user !== null ? loggedIn() : loggedOut()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
