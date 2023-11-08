import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import JobCardList from "../jobs/JobCardList";

/** Render CompanyDetail
 *
 * state:
 * - company (the specific company profile page)
 * - error false/true for company not found
 *
 * RouteList -> CompanyDetail -> {CompanyCard, JobCardList}
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [errors, setErrors] = useState([]);

  console.log("Company Detail rendered. State: ", company);

  const { handle } = useParams();

  useEffect(function loadCompanyFromAPI() {
    /**Get specific company details from API.
     * If company not found, update error state to true */
    async function getCompany() {
      try {
        const companyFromAPI = await JoblyApi.getCompany(handle);
        setCompany(companyFromAPI);
      } catch (err) {
        setErrors(err);
      }
    }
    getCompany();
  }, []);

  console.log("Company Detail Jobs", company?.jobs);

  if (errors.length > 0) {
    return (
      <div className="CompanyDetail">
        {errors.map((e) => (
          <span>{e}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="CompanyDetail">
      {company === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <CompanyCard
            handle={company.handle}
            name={company.name}
            description={company.description}
          />
          <JobCardList jobs={company.jobs} />
        </>
      )}
    </div>
  );
}

export default CompanyDetail;
