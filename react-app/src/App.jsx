import React, { Component } from 'react';

import FormWithStates from './FormWithStates'
import FormWithReferences from "./FormWithReferences";
import FormModel from './FormModel';
import FormTypes from './FormTypes';
import Table from "./Table";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: 'This is an input', number: 0, tableData: [[]], };
    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.textInput = React.createRef();
    this.numberInput = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3001/table')
    .then(data => data.json())
    .then(({ tableData }) => {
      this.setState({
        tableData,
      });
    });
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
    const { textInput, numberInput } = this;
    console.log(textInput.current.value, numberInput.current.value);
  }

  render() {
    const { text, number, tableData } = this.state;
    const formsWithStates = [
      new FormModel(FormTypes.text, text, this.onTextChange),
      new FormModel(FormTypes.number, number, this.onNumberChange),
      new FormModel(FormTypes.submit, "Submit", this.onSubmit),
    ];
    const formsWithProps = [
      new FormModel(FormTypes.text, 'This is an input'),
      new FormModel(FormTypes.number, 0),
      new FormModel(FormTypes.submit, "Submit", this.onSubmit),
    ];
    const references = [this.textInput, this.numberInput];
    return (
      <div className="App">
        <FormWithStates forms={formsWithStates} />
        <FormWithReferences forms={formsWithProps} references={references} />
        <Table rows={tableData} />
      </div>
    );
  }
}

export default App;
