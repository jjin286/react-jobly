import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../Utility/SearchForm";
import { Link } from "react-router-dom";

/** Render CompanyList
 *
 * RouteList -> CompanyList -> CompanyCard
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [search, setSearch] = useState(null);
  console.log("Company List rendered, State: ", companies);

  useEffect(function loadCompaniesFromAPI() {
    /**Gets all companies from JoblyApi */
    async function getCompanies() {
      const companiesFromAPI = await JoblyApi.getCompanies();
      setCompanies(companiesFromAPI);
    }
    getCompanies();
  }, []);

  useEffect(
    function loadFilteredCompaniesFromAPI() {
      /**gets companies that match search criteria from JoblyApi */
      async function getFilteredCompanies() {
        const companiesFromAPI = await JoblyApi.getCompanyBySearch(search);
        setCompanies(companiesFromAPI);
      }
      if (search !== null && search.length > 0) {
        getFilteredCompanies();
      }
    },
    [search]
  );

  function handleSearch(formData) {
    setSearch(formData.search);
  }

  //when the search is submitted, updated set search, which calls another useeffect

  return (
    <div className="CompanyList">
      {companies === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <SearchForm handleSave={handleSearch} />
          {companies.map((c) => (
            <Link to={`/companies/${c.handle}`}>
              <CompanyCard company={c} key={c.handle} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default CompanyList;
