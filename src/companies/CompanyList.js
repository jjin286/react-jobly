import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../utility/SearchForm";
import LoadingSpinner from "../utility/LoadingSpinner";
import Pagination from "../utility/Pagination";

const RECORDS_PER_PAGE = 20;
/** Render CompanyList
 *
 * state:
 * - companies for list of companies
 *
 * RouteList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("Company List rendered, State: ", companies);

  useEffect(() => {
    window.scroll({top:0, behavior:"instant"})
  }, [currentPage])

  /**Gets all companies for initial mount */
  useEffect(function loadCompaniesFromAPI() {
    getCompanies();
  }, []);

  /**Gets all companies from JoblyApi allowing filtering by search */
  async function getCompanies(search = "") {
    const companiesFromAPI = await JoblyApi.getCompanies(search);
    setCompanies(companiesFromAPI);
    setPageNumber(1);
  }

  function setPageNumber(pageNumber){
    setCurrentPage(pageNumber);
  }

  if(companies === null){
    return(
      <LoadingSpinner />
    )
  }

  const indexLastRecord = currentPage * RECORDS_PER_PAGE;
  const indexFirstRecord = indexLastRecord - RECORDS_PER_PAGE;
  const currentCompanies = companies.slice(indexFirstRecord, indexLastRecord)

  return (
    <div className="CompanyList">
      {companies === null ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchForm handleSave={getCompanies} />

          {companies.length === 0 && <span>No companies found</span>}
          {currentCompanies.map((c) => (
            <CompanyCard
              handle={c.handle}
              name={c.name}
              description={c.description}
              key={c.handle}
            />
          ))}
          <Pagination
            pages={Math.ceil(companies.length/RECORDS_PER_PAGE)}
            currentPage={currentPage}
            setCurrentPage={setPageNumber}
          />
        </>
      )}
    </div>
  );
}

export default CompanyList;
