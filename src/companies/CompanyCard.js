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
    <Link className="link-light text-decoration-none" to={`/companies/${handle}`}>
      <div className="CompanyCard bg-info-subtle mx-auto my-3 p-3 w-50 text-start rounded text-bg-light">
          <h3>{name}</h3>
          <div>{description}</div>
      </div>
    </Link>
  );
}

export default CompanyCard;
