import jwtDecode from 'jwt-decode';
import { ADD_USER, UPDATE_USER } from '../actions/user';

const token = localStorage.getItem('instaToken');
const initialState = token ? jwtDecode(token) : {};

const users = (state = initialState, { type, user, properties }) => {
  switch (type) {
    case ADD_USER:
      return user;
    case UPDATE_USER:
      return {
        ...state,
        ...properties
      };
    default:
      return state;
  }
};

export default users;
