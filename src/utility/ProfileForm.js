import { useContext, useState } from "react";
import userContext from "../userContext";
import Message from "./Message";

/**Renders profile form
 *
 * Props:
 * updateUser - fn
 * errors - [err1, err2]
 *
 * state:
 * - formData : form state for form data
 *
 * RouteList -> ProfileForm -> Message
 */
function ProfileForm({ updateUser, errors }) {
  const { user } = useContext(userContext);

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

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
    updateUser(formData);
    setFormData((formData) => ({ ...formData, username: user.username }));
  }

  return (
    <form
      className="ProfileForm justify-content-center d-flex"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <input
        id="username"
        className="form-control w-25 "
        name="username"
        onChange={handleChange}
        value={formData.username || ""}
        disabled
      />
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="firstName"
        className="form-control w-25 "
        name="firstName"
        onChange={handleChange}
        value={formData.firstName || ""}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="lastName"
        className="form-control w-25 "
        name="lastName"
        onChange={handleChange}
        value={formData.lastName || ""}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className="form-control w-25 "
        name="email"
        onChange={handleChange}
        value={formData.email || ""}
      />
      <button className="btn btn-primary " type="submit">
        Submit
      </button>
      {errors !== null && <Message messages={errors} type="danger" />}
    </form>
  );
}

export default ProfileForm;
