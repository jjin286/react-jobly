import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Hero.css"

/** Render Hero section
 *
 * Homepage -> Hero
 */
function Hero(props) {
  console.log(props)
  return (
    <div className="hero m-5">
      <div className="slogan text-justify text-wrap d-flex flex-wrap m-auto">
        <div className="left m-auto">
          <div className="text-section">
            <h1 className="text-justify text-wrap">{props.info.slogan1}</h1>
            <h1 className="text-justify text-wrap">{props.info.slogan2}</h1>
            <p>{props.info.text1}</p>
          </div>
          <div className="start d-flex flex-column mt-5">
            <p>{props.info.text2}</p>
            <div className="button-section">
              <Link to={props.info.link1}>
                <button className="mx-2">{props.info.button1}</button>
              </Link>
              <Link to={props.info.link2}>
                <button className="mx-2">{props.info.button2}</button>
              </Link>
            </div>
          </div>
        </div>
        <img className="hero-image" src={props.info.image}/>
      </div>
    </div>
  );
}

export default Hero;
// #0077B5
