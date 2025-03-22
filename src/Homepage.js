import { useContext } from "react";
import userContext from "./userContext";
import Hero from "./Hero";
import Footer from "./Footer";

/** Render Homepage
 *
 * RouteList -> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
    <div className="homepage">
      <Hero />
      
      <Footer />
    </div>
  );
}

export default Homepage;
