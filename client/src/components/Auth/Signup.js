import React from 'react';
import { func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import InputLabel from '../InputLabel';

const { authErrorsShape } = shapes;

const Signup = ({ firstName, lastName, email, password, handleChange, errors }) => (
  <div className={styles.signup}>
    <div className={styles.personalInfo}>
      <InputLabel
        id="firstNameInput"
        type="firstName"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        labelText="First Name"
        error={errors.firstName}
        labelStyle={{ width: '155px' }}
      />
      <InputLabel
        id="lastNameInput"
        type="firstName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        labelText="Last Name"
        error={errors.lastName}
        labelStyle={{ width: '155px' }}
      />
    </div>
    <InputLabel
      id="emailInput"
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      labelText="Email"
      error={errors.email}
      labelStyle={{ width: '360px' }}
    />
    <InputLabel
      id="passwordInput"
      type="password"
      name="password"
      value={password}
      onChange={handleChange}
      labelText="Password"
      error={errors.password}
      labelStyle={{ width: '360px' }}
    />
  </div>
);

Signup.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
  handleChange: func.isRequired,
  errors: authErrorsShape.isRequired
};

export default Signup;
