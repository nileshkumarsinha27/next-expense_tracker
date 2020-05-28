/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';
import Styles from './listExpense.module.scss';
import HeadingComponent from '../headingComponent/HeadingComponent';
import TableView from '../tableView/TableView';
import CONSTANTS from '../../constants';

/**
 * Defining the list expenses component
 * @param {array} expenseList
 */
const ListExpense = ({ expenseList, ...props }) => (
  <div className={Styles.listExpenseContainer} {...props}>
    <HeadingComponent
      title={CONSTANTS.LIST_EXPENSE.TITLE}
      customClass={Styles.headingExpense}
    />
    <TableView
      data={expenseList}
      headers={CONSTANTS.LIST_EXPENSE.TABLE_HEADERS}
    />
  </div>
);

/**
 * Defining the prop types for the component
 */
ListExpense.propTypes = {
  expenseList: PropTypes.array
};
/**
 * Defining the default values for the props
 */
ListExpense.defaultProps = {
  expenseList: []
};
export default ListExpense;
