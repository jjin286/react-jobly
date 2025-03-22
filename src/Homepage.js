import { useContext } from "react";
import userContext from "./userContext";
import Hero from "./Hero";
import Footer from "./Footer";
import Start from "./Start"
import Features from "./Features";
/** Render Homepage
 *
 * RouteList -> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
    <div className="homepage">
      <Hero />
      <Features />
      <Start />
      <Footer />
    </div>
  );
}

export default Homepage;
