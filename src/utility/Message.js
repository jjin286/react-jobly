import { v4 as uuid } from "uuid";
/**Renders messages
 *
 * Prop
 * -messages []
 * -type
 *
 */
function Message({ messages, type }) {
  return (
    <div className={`Message alert alert-${type}`}>
      {messages.map((m) => (
        <span key={uuid()}>{m}</span>
      ))}
    </div>
  );
}

export default Message;
