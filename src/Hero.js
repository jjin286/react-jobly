import { useContext } from "react";
import userContext from "./userContext";
import "./Hero.css"

/** Render Hero section
 *
 * Homepage -> Hero
 */
function Hero() {
  const { user } = useContext(userContext);
  return (
    <div className="hero m-5">
      <div className="slogan text-justify text-wrap d-flex flex-wrap m-auto">
        <div className="left m-auto">
          <div className="text-section">
            <h1 className="text-justify text-wrap">Ready to find your next step?</h1>
            <h1 className="text-justify text-wrap">Find your next <span className="text-primary">BIG</span> opportunity with Jobly!</h1>
            <p>
              Unlock exciting career possibilities and connect with top employers who value your skills.
              Whether you're searching for a fresh start or aiming for the next level,
              Jobly is here to help you land your dream job. Start exploring today!
            </p>
          </div>
          <div className="start d-flex flex-column mt-5">
            <p>Ready to get started?</p>
            <div className="button-section">
              <button className="mx-2">Login</button>
              <button className="mx-2">Signup</button>
            </div>
          </div>
        </div>
        <img className="hero-image" src="momo.svg"/>
      </div>
    </div>
  );
}

export default Hero;
// #0077B5