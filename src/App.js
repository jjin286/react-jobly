import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteList from "./utility/RouteList";
import Nav from "./utility/Nav";

/** Renders App
 *
 * App -> {Nav, RouteList}
 * 
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
