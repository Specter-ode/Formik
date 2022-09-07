import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selector';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import Auth from '../Auth/Auth';
import s from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(isLogin);

  return (
    <header className={s.header}>
      <Navigation isAuth={isAuth} />
      {isAuth ? <UserMenu /> : <Auth />}
    </header>
  );
};

export default Header;
