import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetail from "../Companies/CompanyDetail";
import CompanyList from "../Companies/CompanyList";
import JobList from "../Jobs/JobList";

/** Renders Routelist
 *
 * App -> RouteList -> {Homepage, CompanyList, CompanyDetail, Joblist}
*/
function RouteList(){
  return(
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/companies" element={<CompanyList />}/>
      <Route path="/companies/:handle" element={<CompanyDetail />}/>
      <Route path="/jobs" element={<JobList />}/>
      <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>
  )
}

export default RouteList;