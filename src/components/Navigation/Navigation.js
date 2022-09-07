import PropTypes from 'prop-types';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { links } from './links';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

function Navigation({ isAuth }) {
  const selectLinks = isAuth ? links : links.filter(item => !item.private);
  const elements = selectLinks.map(({ id, to, text }) => (
    <li className={s.item} key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.nav}>{elements}</ul>;
}

Navigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

getLinkClassName.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Navigation;
