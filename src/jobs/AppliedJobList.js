import { useContext, useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import userContext from "../userContext";
import JoblyApi from "../api";
import LoadingSpinner from "../utility/LoadingSpinner";

/** List of applied jobs
 *
 * State
 * - jobs
 *
 * RouteList -> AppliedJobList -> {LoadingSpinner, JobCardList}
 */
function AppliedJobList(){
  const [jobs, setJobs] = useState(null);
  const user = useContext(userContext);

  useEffect(() =>{
    async function getAppliedJobs(){
      const jobsFromApi = await JoblyApi.getJobs();
      const appliedJobs = jobsFromApi.filter(j =>
        user.user.applications.includes(j.id));
      setJobs(appliedJobs);
    }
    getAppliedJobs();
  },[user])

  return(
    <div className="AppliedJobList">
      {jobs === null
        ? <LoadingSpinner />
        :
        <>
          <h1 className="p-5">Applied Jobs</h1>
          <JobCardList jobs={jobs}/>
          { jobs.length === 0 && <p>No applied jobs</p>}
        </>
      }
    </div>
  )
}

export default AppliedJobList;