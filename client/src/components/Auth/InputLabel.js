import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles.scss';

const InputLabel = ({ id, type, name, value, onChange, labelText, error }) => (
  <label htmlFor={id} className={styles.label}>
    <div className={styles.labelWrapper}>
      {labelText}
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
    <input id={id} type={type} name={name} value={value} onChange={onChange} />
  </label>
);

InputLabel.propTypes = {
  id: string.isRequired,
  labelText: string.isRequired,
  error: string,
  type: string,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired
};

InputLabel.defaultProps = {
  type: 'text',
  error: ''
};

export default InputLabel;
