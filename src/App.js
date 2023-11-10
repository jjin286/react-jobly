import { BrowserRouter, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RouteList from "./utility/RouteList";
import Nav from "./utility/Nav";
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";
import Message from "./utility/Message";
import LoadingSpinner from "./utility/LoadingSpinner";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1698681647459-40276a" +
  "71a56b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3" +
  "&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

/** Renders App
 *
 * State
 * - currentUser
 * - token
 * - errors
 *
 * App -> {Nav, RouteList}
 *
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [errors, setErrors] = useState(null);

  console.log("user state", currentUser);

  useEffect(
    /**decodes token and sets the user based off the username within it */
    function getUserFromToken() {
      if (token !== null) {
        JoblyApi.token = token;
        localStorage.setItem("token", token);
        const userInToken = jwtDecode(token);
        try {
          getUser(userInToken.username);
          setErrors(null);
        } catch (err) {
          setToken(null);
          setErrors(err);
        }
      } else {
        JoblyApi.token = null;
        localStorage.removeItem("token");
        setCurrentUser(null);
      }
    },
    [token]
  );

  /**Logs in user */
  async function login({ username, password }) {
    const token = await JoblyApi.login(username, password);
    setToken(token);
  }

  /**Register a new user */
  async function signup({ username, password, firstName, lastName, email }) {
    setToken(
      await JoblyApi.signup(username, password, firstName, lastName, email)
    );
  }

  /**Get user details */
  async function getUser(username) {
    setCurrentUser(await JoblyApi.getUser(username));
  }

  /**Update user */
  async function updateUser(formData) {
    await JoblyApi.updateUser(formData);
    setCurrentUser((u) => getUser(u.username));
  }

  /**Logout user by setting token to null*/
  function logout() {
    setToken(null);
  }

  /**If token isn't null and user is, show a loading message instead */
  if (token !== null && currentUser === null) {
    return (
      <div className="App">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="vh-100">
        <BrowserRouter>
          <userContext.Provider value={{ user: currentUser }}>
            <Nav logout={logout} />
            <RouteList
              register={signup}
              login={login}
              updateUser={updateUser}
            />
          </userContext.Provider>
        </BrowserRouter>
      </div>
      {errors !== null && <Message messages={errors} type="danger" />}
    </div>
  );
}

export default App;
