import s from './UserMenu.module.css';
import { authStore } from 'mobx/store';
import { observer } from 'mobx-react-lite';
const UserMenu = observer(() => {
  return (
    <div className={s.block}>
      <p className={s.usermenu}>
        <span className={s.text}>Welcome, {authStore.user.name}</span>
        <span className={s.text}>{authStore.user.email}</span>
      </p>
      <button
        className={s.btn}
        onClick={() => authStore.logout(authStore.token)}
      >
        Logout
      </button>
    </div>
  );
});

export default UserMenu;
