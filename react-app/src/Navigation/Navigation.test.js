import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from "react-test-renderer";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navigation from "./Navigation";

describe('Navigation component', () => {
  const testRenderer = TestRenderer.create(<Router><Navigation /></Router>);
  const testInstance = testRenderer.root;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Navigation /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('always renders a nav element', () => {
    expect(testInstance.findByType('nav')).toBeDefined();
  });

  it('always renders a ul element', () => {
    expect(testInstance.findByType('ul')).toBeDefined();
  });

  it('always renders 5 Link components', () => {
    expect(testInstance.findAllByType(Link)).toHaveLength(5);
  });
});
