import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.box}>
      <nav className={s.navigation}>
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

export default Navigation;
