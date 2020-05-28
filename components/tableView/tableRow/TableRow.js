/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';

/**
 * Defining the table row component
 * @param {object} data
 * @param {object} headers
 */
const TableRow = ({ data, headers, ...props }) => {
  /**
   * Function to render indivisual table row data
   * @param {string} headerKey
   * @param {number} index
   */
  const renderTableData = (headerKey, index) => (
    <td key={index}>{data[headerKey]}</td>
  );
  return (
    <tr {...props}>
      {Object.keys(headers).map((key, index) => renderTableData(key, index))}
    </tr>
  );
};

/**
 * Defining the prop types for table row component
 */
TableRow.propTypes = {
  data: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired
};

export default TableRow;
