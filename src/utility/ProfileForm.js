import { useContext, useState } from "react";
import userContext from "./userContext";

/**Renders profile form
 *
 * Props:
 * Function from parent to call on form submission
 *
 * state:
 * - formData : form state for form data
 *
 * RouteList -> ProfileForm
 */
function ProfileForm({ handleSave }) {
  const [formData, setFormData] = useState(user);
  const {user} = useContext(userContext);

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
    <form className="ProfileForm justify-content-center d-flex" onSubmit={handleSubmit}>
      <label htmlFor="username" >Username</label>
      <input
        id="username"
        className="form-control w-25 "
        name="username"
        onChange={handleChange}
        value={formData.username}
        disabled
      />
      <label htmlFor="firstName" >First Name</label>
      <input
        id="firstName"
        type="firstName"
        className="form-control w-25 "
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName" >Last Name</label>
      <input
        id="lastName"
        type="lastName"
        className="form-control w-25 "
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <label htmlFor="email" >Email</label>
      <input
        id="email"
        type="email"
        className="form-control w-25 "
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <button className="btn btn-primary " type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
