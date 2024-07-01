import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/face-templates" className="nav-item" activeClassName="active">
          Face Templates
        </NavLink>
        <NavLink to="/credits" className="nav-item" activeClassName="active">
          Credits
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
