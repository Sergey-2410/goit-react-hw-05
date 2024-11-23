import s from './NavLink.module.css';
import clsx from 'clsx';
const NavLink = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default NavLink;
