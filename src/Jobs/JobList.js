import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";

/** Fetches all jobs from API and renders JobCardList
 *
 * RouteList -> JobList
 */
function JobList() {
  const [jobs, setJobs] = useState(null);

  console.log("Job List rendered ");

  useEffect(function loadJobsFromAPI() {
    /**Gets all jobs from JoblyApi */
    async function getJobs() {
      const jobsFromApi = await JoblyApi.getJobs();
      setJobs(jobsFromApi);
    }
    getJobs();
  }, []);

  return (
    <div className="JobList">
      {jobs === null ? <h1>Loading...</h1> : <JobCardList jobs={jobs} />}
    </div>
  );
}

export default JobList;
