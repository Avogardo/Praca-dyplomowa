import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
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

  render() {
    const { rows } = this.props;
    return (
      rows[0].length ?
        <div className="table-wrapper">
          <table>
            <tbody>
            {this.getRows(rows)}
            </tbody>
          </table>
          <button>Hide table</button>
        </div>
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
