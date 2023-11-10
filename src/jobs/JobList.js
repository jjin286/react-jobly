import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";
import SearchForm from "../utility/SearchForm";
import LoadingSpinner from "../utility/LoadingSpinner";

/** Fetches all jobs from API and renders list of jobs
 *
 * state:
 * - jobs like [{job}, {job}] or null to start
 * - search ""
 *
 * RouteList -> JobList -> {SearchForm, JobCardList}
 */
function JobList() {
  const [jobs, setJobs] = useState(null);

  console.log("Job List rendered ");

  /**Gets all jobs for initial mount */
  useEffect(function loadJobsFromAPI() {
    getJobs();
  }, []);

  /**Gets jobs from JoblyApi by search terms */
  async function getJobs(search = "") {
    const jobsFromApi = await JoblyApi.getJobs(search);
    setJobs(jobsFromApi);
  }

  return (
    <div className="JobList">
      {jobs === null ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchForm handleSave={getJobs} />
          {jobs.length === 0 && <span>No jobs found</span>}
          <JobCardList jobs={jobs} />
        </>
      )}
    </div>
  );
}

export default JobList;
