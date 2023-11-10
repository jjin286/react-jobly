import { useState, useCallback } from "react";
import _ from "lodash";
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
  const debounceFn = useCallback(_.debounce(() => {
    setSearch(input)
    handleSave(search.trim())
  }
    , 250));
  console.log("Search form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target.value;
    setSearch(input);
    // debounceFn();
    _.debounce(() => {
      setSearch(input)
      handleSave(search.trim())
    }
      , 250);
  }

  function attemptChange(){
    console.log("Triggered attemptChange")
    try {
      handleSave(search.trim());
    } catch (err) {
      console.log("err", err)
      setErrors(err);
    }
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    attemptChange();
  }

  return (
    <form
      className="SearchForm py-4 justify-content-center d-flex"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control w-25 "
        name="search"
        placeholder="search"
        onChange={handleChange}
      />
      <button className="btn btn-secondary mx-2" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
