import { func, number, shape, string } from 'prop-types';
import locationShape from './locationShape';

export default shape({
  action: string,
  block: func,
  createHref: func,
  go: func,
  goBack: func,
  goForward: func,
  length: number,
  listen: func,
  location: locationShape,
  push: func,
  replace: func
});
