import { shape, string } from 'prop-types';

export default shape({
  email: string,
  password: string,
  firstName: string,
  lastName: string
});
