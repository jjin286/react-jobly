import JobCard from "./JobCard";


/**Renders list of jobs
 *
 * Props:
 * - jobs like [{job1}, {job2}]
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard
          companyHandle={j.companyHandle}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          id={j.id}
          key={j.id}
        />
      ))}

    </div>
  );
}

export default JobCardList;
