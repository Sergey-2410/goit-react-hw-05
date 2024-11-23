import NavLink from '../NavLink/NavLink';
import Movies from '../Movies/Movies';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink />
      <Movies />
    </div>
  );
};

export default Navigation;
