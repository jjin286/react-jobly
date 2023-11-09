import { useState } from "react";
import Message from "./Message";
/**Renders login form
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - formData : form state for form data
 * TODO: update docstring
 * RouteList -> LoginForm
 */
function LoginForm({ login, errors }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log("Login form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((currentFormData) => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: try catch, error state
    login(formData);
    //use useNavigate to send to homepage
    //Ominous Sarah warning to be careful
    //What type of function is this? does it need to be async? sounds like a hint
  }

  return (
    <form
      className="LoginForm justify-content-center d-flex"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <input
        id="username"
        className="form-control w-25 "
        name="username"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        className="form-control w-25 "
        name="password"
        onChange={handleChange}
      />
      <button className="btn btn-primary " type="submit">
        Submit
      </button>
      {errors !== null && <Message messages={errors} type="danger" />}
    </form>
  );
}

export default LoginForm;
