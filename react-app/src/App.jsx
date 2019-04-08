import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import FormWithStates from './FormWithStates'
import FormWithReferences from "./FormWithReferences";
import FormModel from './FormModel';
import FormTypes from './FormTypes';
import Table from "./Table";
import Navigation from "./Navigation";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'This is an input',
      number: 0,
      tableData: [[]],
      bigTableData: [[]],
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.moveTableElement = this.moveTableElement.bind(this);

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

    const bigTableData = [];
    for (let i = 0; i < 30000; i++) { // 30000 is fine
      if (i === 0) {
        bigTableData.push([
          'This is first item',
          true,
          1,
          "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
        ]);
      } else {
        bigTableData.push([
          'title',
          true,
          54,
          "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
        ]);
      }
    }
    this.setState({
      bigTableData,
    })
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

  moveTableElement() {
    const { bigTableData } = this.state;
    const firstRow = bigTableData.shift();
    bigTableData.push(firstRow);
    this.setState({
      bigTableData
    });
  }

  render() {
    const {
      text,
      number,
      tableData,
      bigTableData,
    } = this.state;
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
      <Router>
        <div className="App">
          <Navigation />
          <div className="form-wrapper">
            <Route
              exact
              path="/form-with-states"
              render={(props) => <FormWithStates {...props} forms={formsWithStates} />}
            />
            <Route
              exact
              path="/form-with-references"
              render={(props) =>
                <FormWithReferences {...props} forms={formsWithProps} references={references}
              />}
            />
          </div>
          <Route path="/server-table" render={(props) => <Table {...props} rows={tableData} />} />
          <Route path="/big-table" render={(props) => <Table {...props} rows={bigTableData} moveTableElement={this.moveTableElement} />} />
        </div>
      </Router>
    );
  }
}

export default App;
