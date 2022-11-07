import PropTypes from 'prop-types';
import s from './LoginForm.module.css';
import Section from 'components/Section/Section';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ onSubmitClick }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid address').required('Required'),
        password: Yup.string()
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            'Must numbers, english small and large letters'
          )
          .min(8, 'Email must be 8 characters or more')
          .required('Required'),
        // .typeError('you must specify a number')
      })}
      // values это наш state in formik
      onSubmit={(values, props) => {
        const { resetForm } = props;
        onSubmitClick({ ...values });
        resetForm();
      }}
    >
      {props => {
        const { values, handleChange, handleSubmit, errors } = props;
        const { email, password } = values;
        const isActive = !email || !password || errors.email || errors.password;
        return (
          <Section title="Login form">
            <Form className={s.form} onSubmit={handleSubmit}>
              <div className={s.block}>
                <Field
                  name="email"
                  type="email"
                  value={values.email}
                  className={s.input}
                  onChange={handleChange}
                />
                <label htmlFor="email" className={s.label}>
                  Email
                </label>
                <ErrorMessage name="email" className={s.error}>
                  {msg => <div className={s.error}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className={s.block}>
                <Field
                  name="password"
                  type="password"
                  value={values.password}
                  className={s.input}
                  onChange={handleChange}
                />
                <label htmlFor="password" className={s.label}>
                  Password
                </label>
                <ErrorMessage name="password" className={s.error}>
                  {msg => <div className={s.error}>{msg}</div>}
                </ErrorMessage>
              </div>

              <button type="submit" className={s.btn} disabled={isActive}>
                Submit
              </button>
            </Form>
          </Section>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
export default LoginForm;
