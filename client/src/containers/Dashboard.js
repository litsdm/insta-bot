import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, string } from 'prop-types';
import shapes from '@shapes';
import callApi from '@helpers/apiCaller';

import { fetchAccountsIfNeeded, addAccount } from '@actions/accounts';

import Dashboard from '@components/Dashboard';
import Loader from '@components/Loader';

const { accountShape } = shapes;

const mapStateToProps = ({ account: { accounts, isFetching }, user: { id } }) => (
  {
    accounts,
    isFetching,
    userId: id
  }
);

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => dispatch(fetchAccountsIfNeeded()),
  dAddAccount: account => dispatch(addAccount(account))
});

class DashboardPage extends Component {
  state = {
    accountIndex: 0,
    accountUser: '',
    accountPassword: ''
  };

  componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  receiveState = (newState) => this.setState(newState);

  handleAdd = () => {
    const { accountUser, accountPassword } = this.state;
    const { userId, dAddAccount } = this.props;
    const payload = {
      email: accountUser,
      password: accountPassword,
      user: userId
    };

    callApi('account', payload, 'POST')
      .then(res => res.json())
      .then(({ account, message }) => {
        console.log(account, message);
        if (message) return Promise.reject(message);

        dAddAccount(account);
        document.getElementById('add-modal').style.display = 'none';
        return Promise.resolve();
      })
      .catch(err => console.error(err))
  }

  render() {
    const { accountIndex, accountUser, accountPassword } = this.state;
    const { isFetching, accounts } = this.props;
    return isFetching
      ? <Loader />
      : (
        <Dashboard
          setState={this.receiveState}
          accounts={accounts}
          accountIndex={accountIndex}
          accountUser={accountUser}
          accountPassword={accountPassword}
          addAccount={this.handleAdd}
        />
      );
  }
}

DashboardPage.propTypes = {
  fetchAccounts: func.isRequired,
  isFetching: bool.isRequired,
  accounts: arrayOf(accountShape),
  userId: string,
  dAddAccount: func.isRequired
};

DashboardPage.defaultProps = {
  accounts: [],
  userId: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
