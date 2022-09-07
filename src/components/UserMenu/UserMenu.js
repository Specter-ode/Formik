import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getToken } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operations';
const UserMenu = () => {
  const { name, email } = useSelector(getUser);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const onLogout = token => {
    dispatch(logout(token));
  };
  return (
    <div className={s.block}>
      <p className={s.usermenu}>
        <span className={s.text}>Welcome, {name}</span>
        <span className={s.text}>{email}</span>
      </p>
      <button className={s.btn} onClick={() => onLogout(token)}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
