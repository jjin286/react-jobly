import { useContext, useEffect, useState } from "react";
import userContext from "../userContext";
import Message from "./Message";
import "./ProfileForm.css";

/**Renders profile form
 *
 * Props:
 * updateUser - fn
 *
 * state:
 * - formData : form state for form data
 * - message: error/success messages
 *
 * RouteList -> ProfileForm -> Message
 */
function ProfileForm({ updateUser }) {
  const { user } = useContext(userContext);

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
  const [message, setMessage] = useState({ messages: null });

  /**Handle form data updates */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((currentFormData) => {
      return { ...currentFormData, [name]: value };
    });
  }

  /** Call parent function and update form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await updateUser(formData);
      setMessage({ messages: ["Updated successfully."], type: "success" });
    } catch (err) {
      setMessage({ messages: err, type: "danger" });
    }
    setFormData((formData) => ({ ...formData, username: user.username }));
  }

  return (
    <div className="ProfileForm">
      <form onSubmit={handleSubmit} >
      <h1>Edit Your Profile</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <div class="inputForm">
            <img src="username.svg"/>
            <input
              id="username"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={formData.username}
              disabled
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <div class="inputForm">
            <input
              id="firstName"
              type="firstName"
              className="form-control"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <div class="inputForm">
            <input
              id="lastName"
              type="lastName"
              className="form-control"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <div class="inputForm">
            <img src="email.svg"/>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>

        <button className="button-submit" type="submit">
          Save Changes
        </button>
        {message.messages !== null && (
          <Message messages={message.messages} type={message.type} />
        )}
      </form>
    </div>
  );
}

export default ProfileForm;
