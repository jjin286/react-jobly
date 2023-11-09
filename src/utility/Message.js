/**Renders messages
 *
 * Prop
 * -messages
 * -type
 *
 */
function Message({messages, type}){
  return(
    <div className="Message">
      {messages.map(m => <span>{m}</span>)}
    </div>
  )
}