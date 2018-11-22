import React from 'react';
import { func, string, object } from 'prop-types';
import styles from './Input.scss';

const Input = ({ name, labelText, value, handleChange, type, inputStyles }) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={`input-${name}`}>
      {labelText}
      <input
        className={styles.input}
        id={`input-${name}`}
        value={value}
        onChange={handleChange}
        type={type}
        styles={inputStyles}
      />
    </label>
  </div>
);

Input.propTypes = {
  labelText: string,
  name: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  type: string,
  inputStyles: object // eslint-disable-line react/forbid-prop-types
};

Input.defaultProps = {
  labelText: '',
  type: 'text',
  inputStyles: {}
};

export default Input;
