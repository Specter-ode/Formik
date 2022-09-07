import PropTypes from 'prop-types';
import s from './RegisterForm.module.css';
import useForm from '../../services/hooks/useForm';
import FormTextField from 'components/FormTextField/FormTextField';
import Section from 'components/Section/Section';
import { fields } from './fields';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmitClick }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmitClick,
    initialState,
  });

  const { name, email, password } = state;
  const isActive = name && email && password.length > 6;
  return (
    <Section title="Registration form">
      <form className={s.form} onSubmit={handleSubmit}>
        <FormTextField value={name} onChange={handleChange} {...fields.name} />
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

RegisterForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
export default RegisterForm;
