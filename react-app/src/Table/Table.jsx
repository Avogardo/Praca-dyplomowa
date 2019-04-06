import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ rows }) => {
  const getCells = cells => cells.map((cell, index) => {
    if (cell === true) {
      return <td key={`${index}cell`}><input type="checkbox" /></td>;
    }
    return <td key={`${index}cell`}>{cell}</td>;
  });

  const getRows = (rows) => rows.map((row, index) => <tr key={`${index}row`}>
    {getCells(row)}
  </tr>);

  if (rows[0].length) {
    return (
      <table>
        <tbody>
          {getRows(rows)}
        </tbody>
      </table>
    );
  }
  return <p>loading...</p>;
};

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
