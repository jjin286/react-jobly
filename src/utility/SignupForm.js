import { useState } from "react";
import Message from "./Message";
import { useNavigate } from "react-router-dom";

/**Renders signup form
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - formData : form state for form data
 * - errors
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
  const navigate = useNavigate();

  console.log("Signup form rendered");

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
    try {
      await register(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }

    //Try catch, usenavigate to go to homepage, think about function type
  }

  return (
    <div className="SignupForm text-start py-2 d-flex flex-column h-100 container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="form-control  "
          name="username"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-control  "
          name="password"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="firstName"
          className="form-control  "
          name="firstName"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="lastName"
          className="form-control  "
          name="lastName"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-control  "
          name="email"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-secondary" type="submit">
        Submit
      </button>

      {errors !== null && <Message messages={errors} type="danger" />}
      </form>
    </div>


  );
}

export default SignupForm;
