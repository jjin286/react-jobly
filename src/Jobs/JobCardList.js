import JobCard from "./JobCard";

/**Renders list of jobs
 *
 * Props:
 * -jobs like [{job1}, {job2}]
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */
//companyHandle, title, salary, equity
function JobCardList({ jobs }) {
  console.log("JobcardList", jobs);
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard
          companyHandle={j.companyHandle}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          key={j.id}
        />
      ))}
    </div>
  );
}

export default JobCardList;
