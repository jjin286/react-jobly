import { Link } from "react-router-dom";

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
    <div className="CompanyCard bg-dark bg-opacity-75 mx-auto my-3 p-3 w-50 text-start rounded text-bg-dark">
      <Link
        className="link-light text-decoration-none"
        to={`/companies/${handle}`}
      >
        <div>
          <h3>{name}</h3>
          <div>{description}</div>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
