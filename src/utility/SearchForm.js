import { useState, useCallback, useEffect } from "react";
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
  const debounceFn = useCallback(
    _.debounce((search) => attemptChange(search), 800),
    []
  );
  console.log("Search form rendered");

  useEffect(
    function debouncedSearch() {
      console.log("use effect", search);
      debounceFn(search);
    },
    [search]
  );

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target.value;
    console.log("input", input);
    setSearch(input);
  }

  async function attemptChange(search) {
    console.log("Triggered attemptChange:", search);
    try {
      await handleSave(search.trim());
    } catch (err) {
      console.log("err", err);
      setErrors(err);
    }
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    attemptChange(search);
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
