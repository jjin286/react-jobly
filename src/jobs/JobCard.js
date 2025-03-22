import { useContext } from "react";
import { formatCurrency } from "../utility/helpers";
import userContext from "../userContext";
import "./JobCard.css"

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
    <div className="JobCard">
      <h3>{title}</h3>
      {companyHandle && <div><img src="company.svg"/> {companyHandle} </div>}
      {salary && <div><img src="salary.svg"/> {formatCurrency(salary)} </div>}
      {equity && <div><img src="equity.svg"/> {equity} </div>}
      {user.applications.indexOf(id) === -1 ? (
        <>
          <button
            className="job-button"
            onClick={() => context.apply(id)}
          >
            Apply Now
          </button>
        </>
      ) : (
        <>
          <button
            className="job-button"
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
