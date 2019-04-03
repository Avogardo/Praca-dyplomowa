import React, { Component } from 'react';

import Form from './form'
import FormModel from './FormModel';
import FormTypes from './FormTypes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: 'This is an input', number: 0 };
    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  onTextChange(event) {
    event.preventDefault();
    this.setState({
      text: event.target.value,
    });
  }

  onNumberChange(event) {
    event.preventDefault();
    this.setState({
      number: event.target.value,
    });
  }

  render() {
    const { text, number } = this.state;
    const forms = [
      new FormModel(FormTypes.text, text, this.onTextChange),
      new FormModel(FormTypes.number, number, this.onNumberChange),
    ];
    return (
      <div className="App">
        <Form forms={forms} />
      </div>
    );
  }
}

export default App;
