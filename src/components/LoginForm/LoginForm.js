import PropTypes from 'prop-types';
import s from './LoginForm.module.css';
import useForm from '../../services/hooks/useForm';
import FormTextField from 'components/FormTextField/FormTextField';
import Section from 'components/Section/Section';
import { fields } from './fields';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = ({ onSubmitClick }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmitClick,
    initialState,
  });

  const { email, password } = state;
  const isActive = email && password;
  return (
    <Section title="Login form">
      <form className={s.form} onSubmit={handleSubmit}>
        <FormTextField
          value={email}
          onChange={handleChange}
          {...fields.email}
        />
        <FormTextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <button type="submit" disabled={!isActive} className={s.btn}>
          Submit
        </button>
      </form>
    </Section>
  );
};

LoginForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
export default LoginForm;
