/**Renders job card
 * props:
 * -job
 *
 * JobCardList -> JobCard
 */
function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      {job.companyHandle && <div>{job.companyHandle} </div>}
      {job.salary && <div>Salary: {job.salary} </div>}
      {job.equity && <div>Equity: {job.equity} </div>}
    </div>
  );
}

export default JobCard;
