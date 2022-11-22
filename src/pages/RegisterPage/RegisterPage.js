import s from './RegistrationPage.module.css';
import { authStore } from 'mobx/store';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { observer } from 'mobx-react-lite';

const RegistrationPage = observer(() => {
  return (
    <main>
      <div className={s.container}>
        <h3>
          You are on the right way. To access to the phonebook you need to
          registration
        </h3>
        <RegistrationForm onSubmitClick={authStore.registration} />
      </div>
    </main>
  );
});

export default RegistrationPage;
