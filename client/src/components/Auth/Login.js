import React from 'react';
import { func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import InputLabel from './InputLabel';

const { authErrorsShape } = shapes;

const Login = ({ email, password, handleChange, errors }) => (
  <div className={styles.login}>
    <InputLabel
      id="emailInput"
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      labelText="Email"
      error={errors.email}
    />
    <InputLabel
      id="passwordInput"
      type="password"
      name="password"
      value={password}
      onChange={handleChange}
      labelText="Password"
      error={errors.password}
    />
  </div>
);

Login.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  handleChange: func.isRequired,
  errors: authErrorsShape.isRequired
};

export default Login;
