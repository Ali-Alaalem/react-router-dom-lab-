import Details from "./components/MailboxDetails";
import Form from "./components/MailboxForm";
import List from "./components/MailboxList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [mailboxes, setmailboxes] = useState([]);

  const addMail = (newMailData) => {
    newMailData._id = mailboxes.length + 1;
    setmailboxes([...mailboxes, newMailData]);
  };

  return (
    <>
      <NavBar />
      <h1>Mailbox</h1>
      <Routes>
        <Route path="/" />
        <Route path="/Mailbox" element={<List mailboxes={mailboxes} />} />
        <Route
          path="/Mailbox/:mailId"
          element={<Details mailboxes={mailboxes} />}
        />
        <Route path="/Mailbox/new" element={<Form addMail={addMail} />} />
      </Routes>
    </>
  );
};

export default App;
