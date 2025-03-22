import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**Renders company card
 *
 * Props:
 * - handle
 * - name
 * - description
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ handle, name, description }) {
  return (
    <div className="CompanyCard">
      <Link
        className="text-decoration-none"
        to={`/companies/${handle}`}
      >
        <div>
          <h3>{name}</h3>
          <div>{description}</div>
        </div>
        <button className="company-button">View Available Jobs</button>
      </Link>
    </div>
  );
}

export default CompanyCard;
