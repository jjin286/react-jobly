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
    const token = await JoblyApi.login(username, password)
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
    setErrors(null);
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

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user: currentUser}}>
          <Nav logout={logout} />
          <RouteList
            register={signup}
            login={login}
            updateUser={updateUser}
            token={token}
          />
        </userContext.Provider>
      </BrowserRouter>
      {errors !== null && <Message messages={errors} type="danger" />}
    </div>
  );
}

export default App;
