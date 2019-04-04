import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormModel from "../FormModel";
import FormTypes from "../FormTypes";

export default class FormWithStates extends Component {
  renderForms(forms) {
    return forms.map(({ type, text, action }, index) =>
      <input
        key={text + index}
        type={type}
        value={text}
        onChange={type !== FormTypes.submit ? action : () => {}}
        onClick={type === FormTypes.submit ? action : () => {}}
      />
    );
  }

  render() {
    const { forms } = this.props;
    return (
      <form>
        {this.renderForms(forms)}
      </form>
    );
  }
}

FormWithStates.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.instanceOf(FormModel)).isRequired,
};
