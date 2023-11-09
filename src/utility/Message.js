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
        <div key={uuid()}>{m}</div>
      ))}
    </div>
  );
}

export default Message;
