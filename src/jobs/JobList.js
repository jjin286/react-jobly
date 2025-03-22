import { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";
import SearchForm from "../utility/SearchForm";
import LoadingSpinner from "../utility/LoadingSpinner";
import Pagination from "../utility/Pagination";

const RECORDS_PER_PAGE = 20;

/** Fetches all jobs from API and renders list of jobs
 *
 * State:
 * - jobs like [{job}, {job}] or null to start
 * - currentPage for pagination like 1
 *
 * RouteList -> JobList -> {SearchForm, JobCardList, LoadingSpinner, Pagination}
 */
function JobList() {
  const [jobs, setJobs] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  /**Gets all jobs for initial mount */
  useEffect(function loadJobsFromAPI() {
    getJobs();
  }, []);

  /**Gets jobs from JoblyApi by search terms */
  async function getJobs(search = "") {
    const jobsFromApi = await JoblyApi.getJobs(search);
    setJobs(jobsFromApi);
    setPageNumber(1);
  }

  /**Set page number */
  function setPageNumber(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const indexLastRecord = currentPage * RECORDS_PER_PAGE;
  const indexFirstRecord = indexLastRecord - RECORDS_PER_PAGE;
  const currentJobs =
    jobs !== null ? jobs.slice(indexFirstRecord, indexLastRecord) : null;

  return (
    <div className="JobList">
      <h1 className="pt-5">Jobs</h1>
      {jobs === null ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchForm handleSave={getJobs} />
          {jobs.length === 0 && <span>No jobs found</span>}
          <JobCardList jobs={currentJobs} />
          <Pagination
            pages={Math.ceil(jobs.length / RECORDS_PER_PAGE)}
            currentPage={currentPage}
            setCurrentPage={setPageNumber}
          />
        </>
      )}
    </div>
  );
}

export default JobList;
