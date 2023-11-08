/**Renders company card
 * Props: company where company is at least like {name, description}
 */

function CompanyCard({ company }) {
  // console.log("Company Card rendered.");

  return (
    <div className="CompanyCard">
      <h3>{company.name}</h3>
      <div>{company.description}</div>
    </div>
  );
}

export default CompanyCard;
