import { useState, useCallback, useEffect } from "react";
import _ from "lodash";
import Message from "./Message";
import "./SearchForm.css";
/**Renders search bar
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - search : form state for search
 * - errors: array of error messages, null if none
 *
 * {CompanyList, JobList} -> SearchForm -> Message
 */
function SearchForm({ handleSave }) {
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState(null);
  const debounceFn = useCallback(
    _.debounce((search) => attemptChange(search), 800),
    []
  );

  useEffect(
    /**Calls the debounce function with the search */
    function debouncedSearch() {
      debounceFn(search);
    },
    [search]
  );

  /**Handle form data updates */
  function handleChange(evt) {
    const input = evt.target.value;
    setSearch(input);
  }

  /**Calls parent function to change displayed results*/
  function attemptChange(search) {
    try {
      handleSave(search.trim());
    } catch (err) {
      setErrors(err);
    }
  }

  /** Prevents default and calls attemptChange with the search*/
  function handleSubmit(evt) {
    evt.preventDefault();
    attemptChange(search);
  }

  return (
    <div>
      <form
        className="SearchForm"
        onSubmit={handleSubmit}
      >
        <div class="inputForm">
          <img src="searchbar.svg"/>
          <input
            className="form-control"
            name="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </form>
      {errors !== null && <Message messages={errors} type="danger" />}
    </div>
  );
}

export default SearchForm;
