import React from 'react';
import { bool, func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import Login from './Login';
import Signup from './Signup';

const { authErrorsShape } = shapes;

const Auth = ({ email, password, handleChange, firstName, lastName, isNew, setState, authorize, errors }) => (
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
              errors={errors}
            />
          )
          : <Login email={email} password={password} handleChange={handleChange} errors={errors} />
      }
      <div className={styles.buttons}>
        <button type="button" className={styles.primary} onClick={authorize}>
          { isNew ? 'Signup' : 'Login' }
        </button>
        <button type="button" className={styles.secondary} onClick={() => setState({ isNew: !isNew, errors: {} })}>
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
  setState: func.isRequired,
  authorize: func.isRequired,
  errors: authErrorsShape.isRequired
}

export default Auth;
