import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import toastr from 'toastr';
import { func } from 'prop-types';
import shapes from '@shapes';
import callApi from '@helpers/apiCaller';

import Auth from '@components/Auth';

import { addUser } from '@actions/user';

const { historyShape } = shapes;

const mapDispatchToProps = dispatch => ({
  addUserFromToken: token => {
    const user = jwtDecode(token);
    dispatch(addUser(user));
  }
});

class AuthPage extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isNew: false,
    errors: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  receiveState = (newState) => this.setState(newState);

  validateEmail = emailStr => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailStr).toLowerCase());
  };

  validateSignup = () => {
    const { firstName, lastName } = this.state;
    let { isValid, newErrors } = this.validateShared()

    if (!firstName) {
      newErrors = { ...newErrors, firstName: 'Required field.' };
      isValid = false;
    }

    if (!lastName) {
      newErrors = { ...newErrors, lastName: 'Required field.' };
      isValid = false;
    }

    this.setState({ errors: newErrors });
    return isValid;
  }

  validateLogin = () => {
    const { isValid, newErrors } = this.validateShared();

    this.setState({ errors: newErrors });
    return isValid;
  }

  validateShared = () => {
    const { email, password } = this.state;
    let newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors = { ...newErrors, email: 'Please write your email.' };
      isValid = false;
    }
    if (email && !this.validateEmail(email)) {
      newErrors = { ...newErrors, email: 'Invalid email.' };
      isValid = false;
    }

    if(!password) {
      newErrors = { ...newErrors, password: 'Please write your password.' };
      isValid = false;
    }
    if (password && password.length < 3) {
      newErrors = { ...newErrors, password: 'Must be at least 3 characters long.' };
      isValid = false;
    }

    return { newErrors, isValid };
  }

  authorize = () => {
    const { isNew, errors, ...payload } = this.state;
    const { addUserFromToken, history } = this.props;
    const endpoint = isNew ? 'sign-up' : 'login';

    if (isNew && !this.validateSignup()) return;
    if (!isNew && !this.validateLogin()) return;

    callApi(endpoint, payload, 'POST')
      .then(res => res.json())
      .then(({ token, message }) => {
        if (message) return Promise.reject(message);

        addUserFromToken(token);
        localStorage.setItem('instaToken')

        history.push('/dashboard');
        return Promise.resolve();
      })
      .catch(err => {
        const message = typeof err === 'string' ? err : err.message;
        toastr.options.positionClass = 'toast-top-center';
        toastr.error(message);
      })
  }

  render() {
    const { firstName, lastName, isNew, email, password, errors } = this.state;
    return (
      <Auth
        firstName={firstName}
        lastName={lastName}
        isNew={isNew}
        email={email}
        password={password}
        handleChange={this.handleChange}
        setState={this.receiveState}
        authorize={this.authorize}
        errors={errors}
      />
    );
  }
}

AuthPage.propTypes = {
  addUserFromToken: func.isRequired,
  history: historyShape.isRequired
};

export default connect(null, mapDispatchToProps)(AuthPage);
