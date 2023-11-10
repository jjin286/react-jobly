import { useContext } from "react";
import userContext from "./userContext";

/** Render Homepage
 *
 * RouteList -> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
    <div className="Homepage h-75 d-flex flex-column align-items-center justify-content-center">
      <div className="bg-secondary rounded p-3 bg-opacity-75">
        <h1>Jobly</h1>
        <div>All the jobs in one, convenient place.</div>
        {user !== null && (
          <h2 className="py-3">
            Welcome, {user.firstName} {user.lastName}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Homepage;
