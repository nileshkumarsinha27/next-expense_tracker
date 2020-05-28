/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Layout from '../components/layout/Layout';
import ListExpense from '../components/listExpense/ListExpense';
import API from '../api.routes';
import CONSTANTS from '../constants';
import { get as getCookie } from '../utils/cookie';
/**
 * The index route of the application
 */
class View extends Component {
  state = {
    expenseData: []
  };

  /**
   * Defining the life cycle methods
   */
  componentDidMount() {
    this.getExpenseList();
  }

  /**
   * Function to get the data from server
   */
  getExpenseList = async () => {
    const url = `${API.LIST_EXPENSE}?id=${
      JSON.parse(getCookie(CONSTANTS.USER_COOKIE)).id
    }`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(CONSTANTS.LOCAL_STORAGE_TOKEN_NAME)
      }
    });
    const json = await res.json();
    this.setState({ expenseData: json.expenseList });
  };

  render() {
    const { expenseData } = this.state;
    return (
      <Layout>
        <ListExpense expenseList={expenseData} />
      </Layout>
    );
  }
}

export default View;
