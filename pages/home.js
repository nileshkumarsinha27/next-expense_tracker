/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import ROUTES from '../routes.constants';
import CONSTANTS from '../constants';

/**
 * The index route of the application
 * @extends Component
 */
class Home extends Component {
  componentDidMount() {
    if (!localStorage.getItem(CONSTANTS.LOCAL_STORAGE_TOKEN_NAME)) {
      Router.push(ROUTES.DEFAULT);
    }
  }

  render() {
    return <Layout />;
  }
}

export default Home;
