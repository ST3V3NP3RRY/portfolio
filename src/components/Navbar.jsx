import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center justify-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
