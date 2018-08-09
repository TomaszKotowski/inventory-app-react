import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({ match }) => (
  <div>
    404 - Page not found. <Link to={`/app/profile`}> Go to home </Link>
  </div>
);

export default NoMatch;