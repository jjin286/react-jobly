import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
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
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="LoginForm fw-bold w-25 d-flex flex-column h-75 justify-content-center container py-2 text-start">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-secondary bg-opacity-75 p-3 rounded"
      >
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
        <button className="btn btn-light opacity-75" type="submit">
          Submit
        </button>
        {errors !== null && <Message messages={errors} type="danger" />}
      </form>
    </div>
  );
}

export default LoginForm;
