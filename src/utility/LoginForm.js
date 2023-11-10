import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
/**Renders login form
 *
 * Props:
 * - login fn
 *
 * state:
 * - formData : form state for form data
 * - errors
 *
 * RouteList -> LoginForm -> Message
 */
function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  console.log("Login form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((currentFormData) => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="LoginForm d-flex flex-column container py-2 text-start">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="form-control "
          name="username"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control "
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-secondary " type="submit">
        Submit
      </button>
      {errors !== null && <Message messages={errors} type="danger" />}
      </form>
    </div>
  );
}

export default LoginForm;
