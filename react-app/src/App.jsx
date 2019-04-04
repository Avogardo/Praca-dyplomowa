import React, { Component } from 'react';

import FormWithStates from './FormWithStates'
import FormModel from './FormModel';
import FormTypes from './FormTypes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: 'This is an input', number: 0 };
    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { text, number } = this.state;
    const forms = [
      new FormModel(FormTypes.text, text, this.onTextChange),
      new FormModel(FormTypes.number, number, this.onNumberChange),
      new FormModel(FormTypes.submit, "Submit", this.onSubmit),
    ];
    return (
      <div className="App">
        <FormWithStates forms={forms} />
      </div>
    );
  }
}

export default App;
