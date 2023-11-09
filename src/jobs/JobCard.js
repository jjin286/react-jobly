import { formatCurrency } from "../utility/helpers";
/**Renders job card
 *
 *
 * props:
 * companyHandle
 * title
 * salary
 * equity
 *
 * JobCardList -> JobCard
 */
function JobCard({ companyHandle, title, salary, equity }) {
  return (
    <div className="JobCard mx-auto my-3 p-3 w-50 text-start rounded bg-secondary-subtle text-bg-light">
      <h3>{title}</h3>
      {companyHandle && <div>{companyHandle} </div>}
      {salary && <div>Salary: {formatCurrency(salary)} </div>}
      {equity && <div>Equity: {equity} </div>}
    </div>
  );
}

export default JobCard;
