import callApi from '@helpers/apiCaller';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';

export function addAccount(account) {
  return {
    account,
    type: ADD_ACCOUNT
  };
}

function requestAccounts() {
  return {
    type: REQUEST_ACCOUNTS
  };
}

function receiveAccounts(accounts) {
  return {
    type: RECEIVE_ACCOUNTS,
    accounts,
    receivedAt: Date.now()
  };
}

function fetchAccounts(userId) {
  return dispatch => {
    dispatch(requestAccounts());
    return callApi(`${userId}/accounts`)
      .then(res => res.json())
      .then(({ accounts }) => dispatch(receiveAccounts(accounts)));
  };
}

function shouldFetchAccounts({ account: { accounts, isFetching } }) {
  if (!accounts || accounts.length <= 0) return true;
  if (isFetching) return false;

  return false;
}

export function fetchAccountsIfNeeded() {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldFetchAccounts(state)) {
      return dispatch(fetchAccounts(state.user.id));
    }
  };
}
