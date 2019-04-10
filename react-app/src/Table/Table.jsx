import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  state = {
    isVisible: true,
    tableData: [[]],
  };

  componentDidMount() {
    if (this.props.isBigTable) {
      const tableData = [];
      for (let i = 0; i < 300; i++) { // 30000 is fine
        if (i === 0) {
          tableData.push([
            'This is first item',
            false,
            1,
            "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
          ]);
        } else {
          tableData.push([
            'title',
            false,
            54,
            "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
          ]);
        }
      }
      this.setState({
        tableData,
      });
    } else {
      fetch('http://localhost:3001/table')
        .then(data => data.json())
        .then(({ tableData }) => {
          this.setState({
            tableData,
          });
        });
    }
  }

  selectRow = (rowIndex, cellIndex) => () => {
    const { tableData } = this.state;
    tableData[rowIndex][cellIndex] = !tableData[rowIndex][cellIndex];
    this.setState({
      tableData,
    });
  }

  getCells(cells, rowIndex) {
    return cells.map((cell, index) => {
      if (typeof cell === 'boolean') {
        return <td key={`${index}cell`}>
          <input type="checkbox" onChange={this.selectRow(rowIndex, index)} checked={cell} />
        </td>;
      } else if (typeof cell === 'string' && cell.includes('.png')) {
        return <td key={`${index}cell`}><img src={cell} alt="js logo" /></td>;
      }
      return <td key={`${index}cell`}>{cell}</td>;
    });
  }

  getRows(rows) {
    return rows.map((row, index) =>
      <tr key={`${index}row`}>
        {this.getCells(row, index)}
      </tr>
    );
  }

  moveTableElement = () => {
    const { tableData } = this.state;
    const firstRow = tableData.shift();
    tableData.splice(1, 0, firstRow);
    this.setState({
      tableData,
    });
  }

  changeTexts = (changeAll = false) => () => {
    const { tableData } = this.state;
    if (changeAll) {
      tableData.forEach(row => {
        row[0] = String(Math.random());
      });
    } else {
      for (let i = 0; i < tableData.length - 1; i += 10) {
        tableData[i][0] = String(Math.random());
      }
    }

    this.setState({
      tableData,
    });
  }

  toggleTable = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  removeOrAddRow = (addRow = false) => () => {
    if (addRow) {
      const { tableData } = this.state;
      tableData.shift();
      this.setState({
        tableData,
      });
    } else {
      const { tableData } = this.state;
      tableData.unshift([
        'Element added',
        false,
        60,
        "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
      ]);
      this.setState({
        tableData,
      });
    }
  }

  render() {
    const { isVisible, tableData } = this.state;
    return (
      tableData[0].length ? [
        <button
          key="moveRow"
          onClick={this.moveTableElement}
        >
          Move row
        </button>,
        <button
          key="showHideTableButton"
          onClick={this.toggleTable}
        >
          {isVisible ? 'Hide' : 'Show'} table
        </button>,
        <button
          key="changeTextsButton"
          onClick={this.changeTexts(true)}
        >
          Change all texts
        </button>,
        <button
          key="changePartiallyTextsButton"
          onClick={this.changeTexts()}
        >
          Change partially text
        </button>,
        <button
          key="removeRow"
          onClick={this.removeOrAddRow(true)}
        >
          Remove row
        </button>,
        <button
          key="addRow"
          onClick={this.removeOrAddRow()}
        >
          Add row
        </button>,
        <div key="tableWithData" className="table-wrapper">
          {isVisible &&
            <table>
              <tbody>
                {this.getRows(tableData)}
              </tbody>
            </table>
          }
        </div>,
      ]
      :
      <p>loading...</p>
    );
  }
}

Table.defaultProps = {
  isBigTable: false,
};

Table.propTypes = {
  isBigTable: PropTypes.bool,
};

export default Table;
