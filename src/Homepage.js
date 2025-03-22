import { useContext } from "react";
import userContext from "./userContext";
import Hero from "./Hero";
import Footer from "./Footer";
import Start from "./Start"
import Features from "./Features";

let hero = {
  slogan1: "Ready to find your next step?",
  slogan2: "Find your next BIG opportunity with Jobly!",
  text1: `Unlock exciting career possibilities and connect with top employers who value your skills.
  Whether you're searching for a fresh start or aiming for the next level,
  Jobly is here to help you land your dream job. Start exploring today!`,
  text2: "Ready to get started?",
  button1: "Login",
  button2: "Signup",
  link1: "/login",
  link2: "/signup",
  image: "momo.svg"
}

let welcome = {
  slogan1: "Welcome to Jobly!",
  slogan2: "Find your next BIG opportunity with Jobly!",
  text1: `The step to your next career is right around the corner! Search for jobs using the jobs or
  companies tab, and keep track of your applications through the applied tab. Ready to start?`,
  text2: "Start searching now!",
  button1: "Companies",
  button2: "Jobs",
  link1: "/companies",
  link2: "/jobs",
  image: "welcome.svg"
}



/** Render Homepage
 *
 * RouteList -> Homepage
 */
function Homepage() {
  const { user } = useContext(userContext);
  return (
    <div className="homepage">
      {user !== null
      ?
        <>
          <Hero info={welcome}/>
        </>
      :
        <>
          <Hero info={hero}/>
          <Start />
          <Features />
        </>
      }
    </div>
  );
}

export default Homepage;
