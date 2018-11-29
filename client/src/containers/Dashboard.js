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
  componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  render() {
    const { isFetching, accounts } = this.props;
    return isFetching ? <Loader /> : <Dashboard accounts={accounts} />;
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
