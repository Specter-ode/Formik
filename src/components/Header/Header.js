import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import Auth from '../Auth/Auth';
import { authStore } from 'mobx/store';
import s from './Header.module.css';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const isAuth = authStore.isLogin;
  return (
    <header className={s.header}>
      <Navigation isAuth={isAuth} />
      {isAuth ? <UserMenu /> : <Auth />}
    </header>
  );
});

export default Header;
