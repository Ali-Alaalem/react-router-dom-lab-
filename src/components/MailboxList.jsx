import { Link } from "react-router-dom";
const List = (props) => {
  if (props.mailboxes.length === 0) {
    return <h4>There is no mail until now</h4>;
  }
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/Mailbox/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
