import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RouteList from "./utility/RouteList";
import Nav from "./utility/Nav";
import userContext from "./userContext";
import { useState } from "react";

/** Renders App
 *
 * App -> {Nav, RouteList}
 *
 */
function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [appliedJobs, setAppliedJobs] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{user}}>
          <Nav />
          <RouteList />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
