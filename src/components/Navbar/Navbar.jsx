import { Link, NavLink } from 'react-router-dom';
import { useDogContext } from '../../context/DogContext';
import './Navbar.css';

function Navbar() {
  const { favorites } = useDogContext();
  const favCount = favorites.length;

  return (
    <nav className="navbar" aria-label="Main">
      <Link to="/" className="logo">
        🐾 PawFinder
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Favourites
            {favCount > 0 && (
              <span className="nav-badge" aria-label={`${favCount} favourites`}>
                {favCount}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
