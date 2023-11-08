import { useState } from "react";
/**Renders search bar
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - search : form state for search
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ handleSave }) {
  const [search, setSearch] = useState("");

  console.log("Search form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target.value;
    setSearch(input);
  }
  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(search.trim());
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input name="search" placeholder="search" onChange={handleChange} />
      <button type="submit">Search!</button>
    </form>
  );
}

export default SearchForm;
