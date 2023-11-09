import { useContext } from "react";
import userContext from "./userContext";

/** Render Homepage
 *
 * RouteList -> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>Jobly</h1>
      {user !== null && (
        <span>
          Welcome back, {user.firstName} {user.lastName}
        </span>
      )}
    </div>
  );
}

export default Homepage;
