import { useState } from "react";
/**Renders search bar
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - Form data
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ handleSave }) {
  const [formData, setFormData] = useState("");

  console.log("Search form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }
  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    if (formData.search.length > 0) {
      handleSave(formData);
    } else {
      alert("Search must be at least one character");
    }
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input name="search" placeholder="search" onChange={handleChange} />
      <button type="submit">Search!</button>
    </form>
  );
}

export default SearchForm;
