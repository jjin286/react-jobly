import { useState } from "react";
/**Renders search bar
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - search : form state for search
 * -
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ handleSave }) {
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState(null);

  console.log("Search form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target.value;
    setSearch(input);
  }
  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    try{
      handleSave(search.trim());
    } catch(err){
      setErrors(err);
    }
  }

  return (
    <form className="SearchForm justify-content-center d-flex" onSubmit={handleSubmit}>
      <input className="form-control w-25 " name="search" placeholder="search" onChange={handleChange} />
      <button className="btn btn-primary " type="submit">Search!</button>
    </form>
  );
}

export default SearchForm;
