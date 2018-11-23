import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles.scss';

const Signup = ({ firstName, lastName, email, password, handleChange }) => (
  <div className={styles.signup}>
    <div className={styles.personalInfo}>
      <label htmlFor="firstNameInput" className={styles.label}>
        First Name
        <input id="firstNameInput" type="firstName" name="firstName" value={firstName} onChange={handleChange} />
      </label>
      <label htmlFor="lastNameInput" className={styles.label}>
        Last Name
        <input id="lastNameInput" type="firstName" name="lastName" value={lastName} onChange={handleChange} />
      </label>
    </div>
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

Signup.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
  handleChange: func.isRequired
};

export default Signup;
