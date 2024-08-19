import { useParams } from "react-router-dom";

const Details = (props) => {
  const { mailId } = useParams();
  const foundedId = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailId)
  );
  if (!foundedId) {
    return <p>Mailbox not found</p>;
  }

  return (
    <ul>
      <h4>Mailbox:</h4>
      <li> {foundedId.Mailbox}</li>
      <h4>Size:</h4>
      <li> {foundedId.selectedSize}</li>
    </ul>
  );
};

export default Details;
