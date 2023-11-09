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
  function loggedIn(){
    return(
      <>
          <NavLink to={"/companies"}>Companies</NavLink>
          <NavLink to={"/jobs"}>Jobs</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>

          <NavLink to={"/logout"} onClick={logout}>
            Logout {user.username}
          </NavLink>
        </>
    )
  }

  /**Return navlinks to be displayed when logged out */
  function loggedOut(){
    return(
      <>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>
      </>
    )
  }

  return (
    <div className="Nav">
      <NavLink to={"/"}>Jobly</NavLink>
      {user !== null ? (
        loggedIn()
      ) : (
        loggedOut()
      )}
    </div>
  );
}

export default Nav;
