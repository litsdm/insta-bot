import React from 'react';
import { withRouter } from 'react-router';
import shapes from '../shapes';

const { childrenShape } = shapes; // Work around for error when doing import { childrenShape } from '@shapes';

const App = ({ children }) => (
  <div className="content-container">
    {children}
  </div>
);

App.propTypes = {
  children: childrenShape.isRequired
};

export default withRouter(App);
