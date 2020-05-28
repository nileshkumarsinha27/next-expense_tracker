/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';

/**
 * Defining the table header component
 * @param {object} headers
 */
const TableHeader = ({ headers, ...props }) =>
  Object.keys(headers).map((key, index) => (
    <th key={index} {...props}>
      {headers[key]}
    </th>
  ));

/**
 * Defining the prop types
 */
TableHeader.propTypes = {
  headers: PropTypes.object.isRequired
};

export default TableHeader;
