import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders without crashing with server data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with big static data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table isBigTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
