import { BrowserRouter, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RouteList from "./utility/RouteList";
import Nav from "./utility/Nav";
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";
/** Renders App
 *
 * App -> {Nav, RouteList}
 *
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState(null);

  console.log("user state", user);

  useEffect(
    /**decodes token and sets the user based off the username within it */
    function getUserNameFromToken() {
      if (token !== null) {
        const userInToken = jwtDecode(token);
        try {
          getUser(userInToken.username);
        } catch (err) {
          setErrors(err);
        }
      } else {
        setUser(null);
      }
    },
    [token]
  );

  /**Logs in user */
  async function login({ username, password }) {
    try {
      setToken(await JoblyApi.login(username, password));
    } catch (err) {
      setErrors(err);
    }
  }

  /**Register a new user */
  async function register({ username, password, firstName, lastName, email }) {
    try {
      setToken(
        await JoblyApi.register(username, password, firstName, lastName, email)
      );
    } catch (err) {
      setErrors(err);
    }
  }

  /**Get user details */
  async function getUser(username) {
    setUser(await JoblyApi.getUser(username));
    setErrors(null);
  }

  /**Update user */
  async function updateUser(formdata) {
    try {
      await JoblyApi.updateUser(formdata);
      setUser((u) => getUser(u.username));
    } catch (err) {
      setErrors(err);
    }
  }

  /**Logout user by setting token to null*/
  function logout() {
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user, token }}>
          <Nav logout={logout} />
          <RouteList
            register={register}
            login={login}
            updateUser={updateUser}
            errors={errors}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
