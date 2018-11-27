import { string, shape } from 'prop-types';

export default shape({
  pathname: string,
  search: string,
  hash: string
})
