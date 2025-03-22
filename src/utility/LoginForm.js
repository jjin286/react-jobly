import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import "./LoginForm.css";

/**Renders login form
 *
 * Props:
 * - login fn
 *
 * State:
 * - formData
 * - errors: array of error messages, null if none
 *
 * RouteList -> LoginForm -> Message
 */
function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setLoading(true);
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="LoginForm">
      {loading && <div className="loader"></div>}
      <form
        onSubmit={handleSubmit}
        className=""
        >
        <h1>Login</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <div class="inputForm">
          <img src="email.svg"/>
            <input
              id="username"
              className="form-control "
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <div class="inputForm">
          <img src="password.svg"/>

            <input
              id="password"
              type="password"
              className="form-control "
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button-submit" type="submit">
          Sign In
        </button>
        {errors !== null && <Message messages={errors} type="danger" />}
      </form>
    </div>
  );
}

export default LoginForm;
