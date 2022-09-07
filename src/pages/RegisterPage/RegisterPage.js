import s from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
  };
  return (
    <main>
      <div className={s.container}>
        <h3>
          You are on the right way. To access to the phonebook you need to
          register
        </h3>
        <RegisterForm onSubmitClick={onRegister} />
      </div>
    </main>
  );
};

export default RegisterPage;
