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

  //TODO: two functions and then ternary in retunr to call userloggedin or not functions


  return (
    <div className="Nav">
      <NavLink to={"/"}>Jobly</NavLink>
      {user !== null ? (
        <>
          <NavLink to={"/companies"}>Companies</NavLink>
          <NavLink to={"/jobs"}>Jobs</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>

          <NavLink to={"/logout"} onClick={logout}>
            Logout {user.username}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>Signup</NavLink>
        </>
      )}
    </div>
  );
}

export default Nav;
