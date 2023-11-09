import { useContext, useEffect, useState } from "react";
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
function ProfileForm({ updateUser }) {
  const { user } = useContext(userContext);

  console.log("user context", user)
  const [formData, setFormData] = useState({
    username: user?.username,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
  });
  const [message, setMessage] = useState({messages:null});

  useEffect(
    /** */
    function loadForm(){
      if(user !== null){
        setFormData({
          username: user?.username,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
        });
      }
  }, [user])

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
    try{
      await updateUser(formData);
      setMessage({messages:["Updated successfully."], type:"success"})
    } catch(err){
      setMessage({messages:err, type:"danger"});
    }
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
      {message.messages !== null && <Message messages={message.messages} type={message.type} />}
    </form>
  );
}

export default ProfileForm;
