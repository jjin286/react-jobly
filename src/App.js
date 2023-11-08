import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteList from "./Utility/RouteList";
import Nav from "./Utility/Nav";

/** Renders App
 *
 * App -> {Nav, RouteList}
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
