import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func } from 'prop-types';
import shapes from '@shapes';

import { fetchAccountsIfNeeded } from '@actions/accounts';

import Dashboard from '@components/Dashboard';
import Loader from '@components/Loader';

const { accountShape } = shapes;

const mapStateToProps = ({ account: { accounts, isFetching } }) => (
  {
    accounts,
    isFetching,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => dispatch(fetchAccountsIfNeeded())
});

class DashboardPage extends Component {
  state = {
    accountIndex: 0
  };

  componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  receiveState = (newState) => this.setState(newState);

  render() {
    const { accountIndex } = this.state;
    const { isFetching, accounts } = this.props;
    return isFetching
      ? <Loader />
      : <Dashboard setState={this.receiveState} accounts={accounts} accountIndex={accountIndex} />;
  }
}

DashboardPage.propTypes = {
  fetchAccounts: func.isRequired,
  isFetching: bool.isRequired,
  accounts: arrayOf(accountShape)
};

DashboardPage.defaultProps = {
  accounts: []
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
