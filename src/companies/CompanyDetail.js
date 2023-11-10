import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import JobCardList from "../jobs/JobCardList";
import Message from "../utility/Message";
import LoadingSpinner from "../utility/LoadingSpinner";

/** Render CompanyDetail
 *
 * state:
 * - company (the specific company profile page)
 * - errors false/true for company not found
 *
 * RouteList -> CompanyDetail -> {CompanyCard, JobCardList, Message, LoadingSpinner}
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [errors, setErrors] = useState([]);

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

  if (errors.length > 0) {
    return (
      <div className="CompanyDetail">
        {errors !== null && <Message messages={errors} type="danger" />}
      </div>
    );
  }

  return (
    <div className="CompanyDetail">
      {company === null ? (
        <LoadingSpinner />
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
