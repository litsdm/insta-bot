import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles.scss';

const Login = ({ email, password, handleChange }) => (
  <div className={styles.login}>
    <label htmlFor="emailInput" className={styles.label}>
      Email
      <input id="emailInput" type="email" name="email" value={email} onChange={handleChange} />
    </label>
    <label htmlFor="passwordInput" className={styles.label}>
      Password
      <input id="passwordInput" type="password" name="password" value={password} onChange={handleChange} />
    </label>
  </div>
);

Login.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  handleChange: func.isRequired
};

export default Login;
