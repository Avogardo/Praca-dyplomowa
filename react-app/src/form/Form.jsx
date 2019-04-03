import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormModel from "../FormModel";

export default class Form extends Component {
  renderForms(forms) {
    return forms.map(({ type, text, action }, index) => <input key={text + index} type={type} value={text} onChange={action} />);
  }

  render() {
    const { forms } = this.props;
    return (
      <form>
        {this.renderForms(forms)}
        <input />
        <input type="number" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.instanceOf(FormModel)).isRequired,
};
