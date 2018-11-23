import React from 'react';
import { bool, func, string } from 'prop-types';
import styles from './styles.scss';

import Login from './Login';
import Signup from './Signup';

const Auth = ({ email, password, handleChange, firstName, lastName, isNew, setState }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p className={styles.brandName}>
        Alerium
      </p>
      <p className={styles.message}>
        { isNew ? 'Welcome to Alerium, create your account below.' :  'Welcome back, please login to your account.'}
      </p>
      {
        isNew
          ? (
            <Signup
              email={email}
              password={password}
              firstName={firstName}
              lastName={lastName}
              handleChange={handleChange}
            />
          )
          : <Login email={email} password={password} handleChange={handleChange} />
      }
      <div className={styles.buttons}>
        <button type="button" className={styles.primary}>
          { isNew ? 'Signup' : 'Login' }
        </button>
        <button type="button" className={styles.secondary} onClick={() => setState({ isNew: !isNew })}>
          { !isNew ? 'Signup' : 'Login' }
        </button>
      </div>
    </div>
  </div>
);

Auth.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  isNew: bool.isRequired,
  handleChange: func.isRequired,
  setState: func.isRequired
}

export default Auth;
