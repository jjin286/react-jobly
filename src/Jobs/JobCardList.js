import JobCard from "./JobCard";

/**Renders list of jobs
 *
 * Props:
 * -jobs
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  console.log("JobcardList", jobs);
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard job={j} key={j.id} />
      ))}
    </div>
  );
}

export default JobCardList;
