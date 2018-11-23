import React, { Component } from 'react';

import Auth from '@components/Auth';

class AuthPage extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isNew: false
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  receiveState = (newState) => this.setState(newState);

  login = () => {

  }

  signup = () => {
    
  }

  render() {
    const { firstName, lastName, isNew, email, password } = this.state;
    return (
      <Auth
        firstName={firstName}
        lastName={lastName}
        isNew={isNew}
        email={email}
        password={password}
        handleChange={this.handleChange}
        setState={this.receiveState}
      />
    );
  }
}

export default AuthPage;
