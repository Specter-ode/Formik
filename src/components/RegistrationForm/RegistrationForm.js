import PropTypes from 'prop-types';
import s from './RegistrationForm.module.css';
import Section from 'components/Section/Section';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = ({ onSubmitClick }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(/^[a-zA-Z]+$/, 'Must be only charaters')
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
        email: Yup.string().email('Invalid address').required('Required'),
        password: Yup.string()
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            'Must numbers, english small and large letters'
          )
          .min(8, 'Email must be 8 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, props) => {
        const { resetForm } = props;
        onSubmitClick({ ...values });
        resetForm();
      }}
    >
      {props => {
        const { values, handleChange, handleSubmit, errors } = props;
        const { name, email, password } = values;
        const isActive =
          !name || !email || !password || errors.email || errors.password;
        return (
          <Section title="Registration form">
            <Form className={s.form} onSubmit={handleSubmit}>
              <div className={s.block}>
                <Field
                  name="name"
                  type="name"
                  value={values.name}
                  className={s.input}
                  onChange={handleChange}
                />
                <label htmlFor="name" className={s.label}>
                  Name
                </label>
                <ErrorMessage name="name" className={s.error}>
                  {msg => <div className={s.error}>{msg}</div>}
                </ErrorMessage>
              </div>
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

RegistrationForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
export default RegistrationForm;
