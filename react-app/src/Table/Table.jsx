import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };

    this.toggleTable = this.toggleTable.bind(this);
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

  toggleTable() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { rows } = this.props;
    const { isVisible } = this.state;
    return (
      rows[0].length ? [
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
                {this.getRows(rows)}
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
  rows: [[]],
};

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
      ]),
    ),
  ),
};

export default Table;
