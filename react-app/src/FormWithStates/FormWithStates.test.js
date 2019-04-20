import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from "react-test-renderer";

import FormWithStates from "./FormWithStates";
import FormTypes from "../FormTypes";
import FormModel from "../FormModel";

describe('FormWithStates component', () => {
  const formsWithStates = [
    new FormModel(FormTypes.text, "text"),
    new FormModel(FormTypes.number, 1),
    new FormModel(FormTypes.submit, "Submit"),
  ];

  const testRenderer = TestRenderer.create(<FormWithStates forms={formsWithStates} />);
  const testInstance = testRenderer.root;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormWithStates forms={formsWithStates} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('always renders a form wrapper', () => {
    expect(testInstance.findByProps({ className: 'form-wrapper' })).toBeDefined();
  });

  it('always renders a form element', () => {
    expect(testInstance.findByType('form')).toBeDefined();
  });

  it('always renders as much inputs ad form prop contain', () => {
    expect(testInstance.findAllByType('input')).toHaveLength(formsWithStates.length);
  });

  it('always renders inputs with type as in form models', () => {
    formsWithStates.forEach((form) => {
      expect(testInstance.findByProps({ type: form.type })).toBeDefined();
    })
  });

  it('always renders inputs with value as in form models', () => {
    formsWithStates.forEach((form) => {
      expect(testInstance.findByProps({ value: form.text })).toBeDefined();
    })
  });
});
