import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import TestRenderer from "react-test-renderer";

import App from './App';
import Navigation from "./Navigation";


describe('Table component', () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('always renders an App wrapper', () => {
    expect(testInstance.findByProps({ className: 'App' })).toBeDefined();
  });

  it('always renders a Navigation component', () => {
    expect(testInstance.findByType(Navigation)).toBeDefined();
  });

  it('always renders 4 routs components', () => {
    expect(testInstance.findAllByType(Route)).toHaveLength(4);
  });
});
