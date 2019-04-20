import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormModel from "../FormModel";
import FormTypes from "../FormTypes";
import './Form.css';

export default class FormWithReferences extends Component {
  renderForms(forms, references) {
    return forms.map(({ type, text, action, reference }, index) =>
      <input
        key={`${text}${index}withReferences`}
        type={type}
        defaultValue={type !== FormTypes.submit ? text : undefined}
        ref={references[index]}
        value={type === FormTypes.submit ? text : undefined}
        onClick={type === FormTypes.submit ? action : () => {}}
      />
    );
  }

  render() {
    const { forms, references } = this.props;
    return (
      <div className="form-wrapper">
        <form>
          {this.renderForms(forms, references)}
        </form>
      </div>
    );
  }
}

FormWithReferences.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.instanceOf(FormModel).isRequired,
  ).isRequired,
  references: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  ])).isRequired,
};
