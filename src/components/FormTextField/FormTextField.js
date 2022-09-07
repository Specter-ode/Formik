import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import s from './FormTextField.module.css';

const FormTextField = ({
  label,
  name,
  value,
  onChange,
  required,
  type,
  placeholder,
  title,
  pattern,
}) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={s.block}>
      <input
        className={s.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        type={type}
        title={title}
        pattern={pattern}
      />
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormTextField;

FormTextField.defaultProps = {
  type: 'text',
  required: false,
};

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  pattern: PropTypes.string,
};
