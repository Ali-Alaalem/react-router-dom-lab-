import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Mailbox">Mailbox</Link>
        </li>

        <li>
          <Link to="/Mailbox/new">New Mailbox</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
