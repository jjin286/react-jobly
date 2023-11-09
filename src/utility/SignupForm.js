import { useState } from "react";

/**Renders signup form
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - formData : form state for form data
 *
 * RouteList -> SignupForm
 */
function SignupForm({ handleSave }) {
  const [formData, setFormData] = useState(null);

  console.log("Signup form rendered");

  /**Handle form data updates */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(currentFormData => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
  }

  return (
    <form className="SignupForm justify-content-center d-flex" onSubmit={handleSubmit}>
      <label htmlFor="username" >Username</label>
      <input
        id="username"
        className="form-control w-25 "
        name="username"
        onChange={handleChange}
      />
      <label htmlFor="password" >Password</label>
      <input
        id="password"
        type="password"
        className="form-control w-25 "
        name="password"
        onChange={handleChange}
      />
      <label htmlFor="firstName" >First Name</label>
      <input
        id="firstName"
        type="firstName"
        className="form-control w-25 "
        name="firstName"
        onChange={handleChange}
      />
      <label htmlFor="lastName" >Last Name</label>
      <input
        id="lastName"
        type="lastName"
        className="form-control w-25 "
        name="lastName"
        onChange={handleChange}
      />
      <label htmlFor="email" >Email</label>
      <input
        id="email"
        type="email"
        className="form-control w-25 "
        name="email"
        onChange={handleChange}
      />
      <button className="btn btn-primary " type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
