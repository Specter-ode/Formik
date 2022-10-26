import s from './RegisterPage.module.css';
import { authStore, contactsStore } from 'mobx/store';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { observer } from 'mobx-react-lite';

const RegisterPage = observer(() => {
  console.log(contactsStore.loading);
  return (
    <main>
      <div className={s.container}>
        <h3>
          You are on the right way. To access to the phonebook you need to
          register
        </h3>
        <RegisterForm onSubmitClick={authStore.register} />
      </div>
    </main>
  );
});

export default RegisterPage;
