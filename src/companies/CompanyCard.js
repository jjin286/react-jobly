/**Renders company card
 * 
 * Props:
 * - handle
 * - name
 * - description
 *
 * CompanyList -> CompanyCard
 */

import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description }) {
  // console.log("Company Card rendered.");

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <h3>{name}</h3>
        <div>{description}</div>
      </Link>
    </div>
  );
}

export default CompanyCard;
