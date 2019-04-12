import React from 'react';
import TestRenderer from 'react-test-renderer';

import ReactDOM from 'react-dom';
import Table from './Table';

describe('Table component', () => {
  const testRenderer = TestRenderer.create(<Table isBigTable />);
  const testInstance = testRenderer.root;

  it('renders without crashing with server data', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing with big static data', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table isBigTable/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('always renders a table element', () => {
    expect(testInstance.findByType('table')).toBeDefined();
  });

  it('always renders a table wrapper element', () => {
    expect(testInstance.findByProps({className: 'table-wrapper'})).toBeDefined();
  });

  it('always renders a 6 functional button elements', () => {
    expect(testInstance.findAllByType('button')).toHaveLength(6);
  });
});
