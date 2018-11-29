import { ADD_ACCOUNT, REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS } from '@actions/accounts';

const initialState = {
  isFetching: false,
  accounts: []
};

export default function counter(state = initialState, { type, account, accounts }) {
  switch (type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, account]
      };
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        accounts: [...state.accounts, ...accounts],
        isFetching: false
      }
    default:
      return state;
  }
}
