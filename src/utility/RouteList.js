import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetail from "../companies/CompanyDetail";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import LoginForm from "./LoginForm";

/** Renders Routelist
 *
 * App -> RouteList -> {Homepage, CompanyList, CompanyDetail, Joblist}
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default RouteList;
