import { useState } from "react";
import Message from "./Message";

/**Renders signup form
 *
 * Props:
 * Function from parent to call on form submission
 * Errors - list of errors
 *
 * state:
 * - formData : form state for form data
 *
 * RouteList -> SignupForm -> Message
 */
function SignupForm({ register, errors }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

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
  function handleSubmit(evt) {
    evt.preventDefault();
    register(formData);
    //Try catch, usenavigate to go to homepage, think about function type
  }

  return (
    <form
      className="SignupForm justify-content-center d-flex"
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
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="firstName"
        className="form-control w-25 "
        name="firstName"
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="lastName"
        className="form-control w-25 "
        name="lastName"
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className="form-control w-25 "
        name="email"
        onChange={handleChange}
      />
      <button className="btn btn-primary " type="submit">
        Submit
      </button>

      {errors !== null && <Message messages={errors} type="danger" />}
    </form>
  );
}

export default SignupForm;
