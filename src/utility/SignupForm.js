import { useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

/**Renders signup form
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - formData : form state for form data
 * - errors: array of error messages, null if none
 *
 * RouteList -> SignupForm -> Message
 */
function SignupForm({ register }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**Handle form data updates */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(formData);

    setFormData((currentFormData) => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    try {
      await register(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="SignupForm ">
      {loading && <div className="loader"></div>}
      <form
        onSubmit={handleSubmit}
        className=""
        >
        <h1>Signup</h1>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div class="inputForm">
            <img src="username.svg"/>
            <input
              id="username"
              className="form-control  "
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <div class="inputForm">
            <img src="password.svg"/>
            <input
              id="password"
              type="password"
              className="form-control  "
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <div class="inputForm">
            <input
              id="firstName"
              type="firstName"
              className="form-control  "
              name="firstName"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <div class="inputForm">
            <input
              id="lastName"
              type="lastName"
              className="form-control  "
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <div class="inputForm">
            <img src="email.svg"/>
            <input
              id="email"
              type="email"
              className="form-control  "
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="button-submit" type="submit">
          Create Account
        </button>

        {errors !== null && <Message messages={errors} type="danger" />}
      </form>
    </div>
  );
}

export default SignupForm;
