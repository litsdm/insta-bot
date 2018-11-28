import React from 'react';
import { func, string, object } from 'prop-types';
import styles from './InputLabel.scss';

const InputLabel = ({ id, type, name, value, onChange, labelText, error, labelStyle }) => (
  <label htmlFor={id} className={styles.label} style={labelStyle}>
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
  onChange: func.isRequired,
  labelStyle: object // eslint-disable-line react/forbid-prop-types
};

InputLabel.defaultProps = {
  type: 'text',
  error: '',
  labelStyle: {}
};

export default InputLabel;
