import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      tableData: [[]],
    };

    this.toggleTable = this.toggleTable.bind(this);
    this.moveTableElement = this.moveTableElement.bind(this);
  }

  componentDidMount() {
    if (this.props.isBigTable) {
      const tableData = [];
      for (let i = 0; i < 300; i++) { // 30000 is fine
        if (i === 0) {
          tableData.push([
            'This is first item',
            true,
            1,
            "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png",
          ]);
        } else {
          tableData.push([
            'title',
            true,
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

  getCells(cells) {
    return cells.map((cell, index) => {
      if (cell === true) {
        return <td key={`${index}cell`}><input type="checkbox" /></td>;
      } else if (typeof cell === 'string' && cell.includes('.png')) {
        return <td key={`${index}cell`}><img src={cell} alt="js logo" /></td>;
      }
      return <td key={`${index}cell`}>{cell}</td>;
    });
  }

  getRows(rows) {
    return rows.map((row, index) =>
      <tr key={`${index}row`}>
        {this.getCells(row)}
      </tr>
    );
  }

  moveTableElement() {
    const { tableData } = this.state;
    const firstRow = tableData.shift();
    tableData.push(firstRow);
    this.setState({
      tableData
    });
  }

  toggleTable() {
    this.setState({ isVisible: !this.state.isVisible });
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
