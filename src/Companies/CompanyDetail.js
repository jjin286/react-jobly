import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import JobCardList from "../Jobs/JobList";

/** Render CompanyDetail
 *
 * RouteList -> CompanyDetail -> CompanyCard
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  console.log("Company Detail rendered. State: ", company);

  const { handle } = useParams();

  useEffect(function loadCompanyFromAPI() {
    async function getCompany() {
      const companyFromAPI = await JoblyApi.getCompany(handle);
      setCompany(companyFromAPI);
    }
    getCompany();
  }, []);

  console.log("Company Detail Jobs", company?.jobs);

  return (
    <div className="CompanyDetail">
      {company === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <CompanyCard company={company} />
          <JobCardList jobs={company.jobs} />
        </>
      )}
    </div>
  );
}

export default CompanyDetail;
