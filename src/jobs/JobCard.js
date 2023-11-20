import { useContext } from "react";
import { formatCurrency } from "../utility/helpers";
import userContext from "../userContext";

/**Renders job card
 *
 * Props:
 * - id
 * - companyHandle
 * - title
 * - salary
 * - equity
 *
 * JobCardList -> JobCard
 */
function JobCard({ id, companyHandle, title, salary, equity }) {
  const context = useContext(userContext);
  const { user } = useContext(userContext);

  return (
    <div className="JobCard mx-auto my-3 p-3 w-50 text-start rounded bg-secondary bg-opacity-75">
      <h3>{title}</h3>
      {companyHandle && <div>{companyHandle} </div>}
      {salary && <div>Salary: {formatCurrency(salary)} </div>}
      {equity && <div>Equity: {equity} </div>}
      {user.applications.indexOf(id) === -1 ? (
        <>
          <button
            className="btn btn-dark opacity-75  my-1"
            onClick={() => context.apply(id)}
          >
            Apply Now
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-dark opacity-50  my-1"
            onClick={() => context.apply(id)}
          >
            Unapply
          </button>
        </>
      )}
    </div>
  );
}

export default JobCard;
