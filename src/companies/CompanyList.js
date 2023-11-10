import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../utility/SearchForm";

/** Render CompanyList
 *
 * state:
 * - companies for list of companies
 *
 * RouteList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  console.log("Company List rendered, State: ", companies);

  /**Gets all companies for initial mount */
  useEffect(function loadCompaniesFromAPI() {
    getCompanies();
  }, []);

  /**Gets all companies from JoblyApi allowing filtering by search */
  async function getCompanies(search = "") {
    const companiesFromAPI = await JoblyApi.getCompanies(search);
    setCompanies(companiesFromAPI);
  }

  return (
    <div style={{height:"100%"}} className="CompanyList">
      {companies === null ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <SearchForm handleSave={getCompanies} />
          {companies.length === 0 && <span>No companies found</span>}
          {companies.map((c) => (
            <CompanyCard
              handle={c.handle}
              name={c.name}
              description={c.description}
              key={c.handle}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CompanyList;
