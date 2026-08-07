import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🐶 Dog Finder
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Breeds</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;