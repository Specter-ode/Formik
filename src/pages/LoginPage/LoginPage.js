import s from './LoginPage.module.css';
import { authStore } from 'mobx/store';
import LoginForm from '../../components/LoginForm/LoginForm';
import { observer } from 'mobx-react-lite';
const LoginPage = observer(() => {
  return (
    <main>
      <div className={s.container}>
        <h3>
          You are on the right way. To access to the phonebook you need to sign
          in
        </h3>
        <LoginForm onSubmitClick={authStore.login} />
      </div>
    </main>
  );
});
export default LoginPage;
