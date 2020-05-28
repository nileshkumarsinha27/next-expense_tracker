/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';
import TableHeader from './tableHeader/TableHeader';
import TableRow from './tableRow/TableRow';
import Styles from './tableView.module.scss';

/**
 *
 * @param {object} headers
 * @param {array} data
 */
const TableView = ({ headers, data, ...props }) => {
  /**
   * Function to render indivisual row of the table
   */
  const renderTableRow = () =>
    data.map((expense, index) => (
      <TableRow data={expense} headers={headers} key={index} />
    ));
  return (
    <div {...props}>
      <table className={Styles.tableContainer}>
        <thead>
          <tr>
            <TableHeader headers={headers} />
          </tr>
        </thead>
        <tbody>{renderTableRow()}</tbody>
      </table>
    </div>
  );
};

/**
 * Defining the prop types
 */
TableView.propTypes = {
  headers: PropTypes.object,
  data: PropTypes.array
};

/**
 * Defining the default values of the props
 */
TableView.defaultProps = {
  headers: {},
  data: []
};

export default TableView;
