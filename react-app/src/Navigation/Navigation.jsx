import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/form-with-states">form with states</Link>
      </li>
      <li>
        <Link to="/form-with-references">form with references</Link>
      </li>
      <li>
        <Link to="/server-table">server table</Link>
      </li>
      <li>
        <Link to="/big-table">big table</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
