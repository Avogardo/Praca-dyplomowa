import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from "react-test-renderer";

import FormTypes from "../FormTypes";
import FormModel from "../FormModel";
import FormWithReferences from "./FormWithReferences";

describe('FormWithReferences component', () => {
  const references = [React.createRef(), React.createRef()];
  const formsWithProps = [
    new FormModel(FormTypes.text, 'This is an input'),
    new FormModel(FormTypes.number, 0),
    new FormModel(FormTypes.submit, "Submit"),
  ];

  const testRenderer = TestRenderer.create(
    <FormWithReferences forms={formsWithProps} references={references} />);
  const testInstance = testRenderer.root;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormWithReferences forms={formsWithProps} references={references} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('always renders a form element', () => {
    expect(testInstance.findByType('form')).toBeDefined();
  });

  it('always renders as much inputs ad form prop contain', () => {
    expect(testInstance.findAllByType('input')).toHaveLength(formsWithProps.length);
  });

  it('always renders inputs with type as in form models', () => {
    formsWithProps.forEach((form) => {
      expect(testInstance.findByProps({ type: form.type })).toBeDefined();
    })
  });
});
