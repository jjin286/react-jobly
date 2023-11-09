import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetail from "../companies/CompanyDetail";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "../userContext";
import React, { useContext } from "react";

/**
 * Renders Routelist
 *
 * Props:
 * - register fn
 * - login fn
 * - updateUser fn
 * - token
 *
 * App -> RouteList -> {Homepage, CompanyList,
 *                      CompanyDetail, Joblist, ProfileForm, LoginForm}
 */
function RouteList({ register, login, updateUser, token}) {
  const { user } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {token !== null ? (
        <>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route
            path="/profile"
            element={<ProfileForm updateUser={updateUser}  />}
          />
        </>
      ) : (
        <>
          <Route
            path="/login"
            element={<LoginForm login={login}  />}
          />
          <Route
            path="/signup"
            element={<SignupForm register={register}  />}
          />
        </>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
