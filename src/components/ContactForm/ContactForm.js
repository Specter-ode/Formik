import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onSubmitClick }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(/^[a-zA-Z]+$/, 'Must be only charaters')
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
        number: Yup.string()
          .matches(/^[0-9]+$/gi, 'Must be only numbers')
          .min(7, 'Must be 7 characters or more')
          .required('Required'),
        // .typeError('you must specify a number')
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmitClick({ ...values });
        resetForm();
      }}
    >
      {props => {
        const { values, handleChange, handleSubmit, errors } = props;
        return (
          <Form className={s.form} onSubmit={handleSubmit}>
            <div className={s.block}>
              <Field
                name="name"
                type="text"
                value={values.name}
                className={s.input}
                onChange={handleChange}
              />
              <label htmlFor="name" className={s.label}>
                Name
              </label>
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.block}>
              <Field
                name="number"
                type="tel"
                value={values.number}
                className={s.input}
                onChange={handleChange}
              />
              <label htmlFor="number" className={s.label}>
                Number
              </label>

              <ErrorMessage name="number">
                {msg => <div className={s.error}>{msg}</div>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className={s.btn}
              disabled={errors.name || errors.number}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
// const initialState = {
//   name: '',
//   number: '',
// };
// const ContactForm = ({ onSubmitClick }) => {
//   const { state, handleChange, handleSubmit } = useForm({
//     onSubmitClick,
//     initialState,
//   });
//   const { name, number } = state;
//   const isActive = name && number.length > 6;
//   return (
//     <form onSubmit={handleSubmit} className={s.form}>
//       <FormTextField value={name} onChange={handleChange} {...fields.name} />
//       <FormTextField
//         value={number}
//         onChange={handleChange}
//         {...fields.number}
//       />
//       <button type="submit" disabled={!isActive} className={s.btn}>
//         Add contact
//       </button>
//     </form>
//   );
// };

ContactForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};
Formik.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default ContactForm;
