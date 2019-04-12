import React from 'react';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import ReactDOM from 'react-dom';
import Table from './Table';

describe('Table component', () => {
  const testRenderer = TestRenderer.create(<Table isBigTable />);
  const testInstance = testRenderer.root;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders without crashing with server data', () => {
    ReactDOM.render(<Table/>, container);
    ReactDOM.unmountComponentAtNode(container);
  });

  it('renders without crashing with big static data', () => {
    ReactDOM.render(<Table isBigTable/>, container);
    ReactDOM.unmountComponentAtNode(container);
  });

  it('always renders a table element', () => {
    expect(testInstance.findByType('table')).toBeDefined();
  });

  it('always renders a table wrapper element', () => {
    expect(testInstance.findByProps({ className: 'table-wrapper' })).toBeDefined();
  });

  it('always renders a 6 functional button elements', () => {
    expect(testInstance.findAllByType('button')).toHaveLength(6);
  });

  it('replace first row with the second one', () => {
    act(() => {
      ReactDOM.render(<Table isBigTable />, container);
    });
    const button = container.querySelectorAll('button')[0];
    const firstRowText = container
      .querySelector('tr')
      .querySelector('td')
      .textContent;
    const secondRowText = container
      .querySelectorAll('tr')[1]
      .querySelector('td')
      .textContent;

    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    const newFirstRowText = container
      .querySelector('tr')
      .querySelector('td')
      .textContent;
    const newSecondRowText = container
      .querySelectorAll('tr')[1]
      .querySelector('td')
      .textContent;
    expect(newFirstRowText).toBe(secondRowText);
    expect(newSecondRowText).toBe(firstRowText);
  });

  it('remove all rows on click hide rows button', () => {
    act(() => {
      ReactDOM.render(<Table isBigTable />, container);
    });
    const button = container.querySelectorAll('button')[1];
    let rows = container.querySelectorAll('tr').length;
    expect(rows).toBe(300);

    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    rows = container.querySelectorAll('tr').length;
    expect(rows).toBe(0);
  });
});
