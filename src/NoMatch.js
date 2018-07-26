import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    404 - Page not found. <Link to="/"> Go to home page </Link>
  </div>
);

export default NoMatch;