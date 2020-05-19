/**
 * Importing the dependencies
 */
import Layout from '../components/layout/Layout';
import AddExpense from '../components/addExpense/AddExpense';

/**
 * The index route of the application
 */
const Expenses = () => {
  return (
    <Layout>
      <AddExpense />
    </Layout>
  );
};

export default Expenses;
