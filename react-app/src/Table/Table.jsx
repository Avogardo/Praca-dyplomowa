import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonModel from "./ButtonModel";
import './Table.css';

class Table extends Component {
  state = {
    isVisible: true,
    tableData: [[]],
  };

  componentDidMount() {
    if (this.props.isBigTable) {
      const tableData = [];
      for (let i = 0; i < 5000; i++) {
        if (i === 0) {
          tableData.push([
            'This is first item',
            false,
            1,
            'https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png',
          ]);
        } else {
          tableData.push([
            'title',
            false,
            54,
            'https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png',
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
    const { tableData } = this.state;
    if (addRow) {
      tableData.shift();
    } else {
      tableData.unshift([
        'Element added',
        false,
        60,
        'https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png',
      ]);
    }
    this.setState({
      tableData,
    });
  }

  renderButtons() {
    const { isVisible } = this.state;
    const buttons = [
      new ButtonModel('moveRow', this.moveTableElement, 'Move row'),
      new ButtonModel('showHideTableButton', this.toggleTable, `${isVisible ? 'Hide' : 'Show'} table`),
      new ButtonModel('changeTextsButton', this.changeTexts(true), 'Change all texts'),
      new ButtonModel('changePartiallyTextsButton', this.changeTexts(), 'Change partially text'),
      new ButtonModel('removeRow', this.removeOrAddRow(true), 'Remove row'),
      new ButtonModel('addRow', this.removeOrAddRow(), 'Add row'),
    ];

    return buttons.map(({ key, event, text}) => (
      <button
        key={key}
        onClick={event}
      >
        {text}
      </button>
    ));
  }

  render() {
    const { isVisible, tableData } = this.state;
    return (
      tableData[0].length ? [
        this.renderButtons(),
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
