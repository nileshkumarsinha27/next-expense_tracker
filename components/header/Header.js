/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Router from 'next/router';
import ROUTES from '../../routes.constants';
import CONSTANTS from '../../constants';
import Styles from './header.module.scss';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import { get as getCookie } from '../../utils/cookie';

/**
 * Defining the header component
 */
class Header extends Component {
  /**
   * defining the initial state
   */
  state = {
    user: {}
  };

  /**
   * Defining the life cycle methods
   */
  componentDidMount() {
    const user = JSON.parse(getCookie(CONSTANTS.USER_COOKIE));
    if (user) {
      this.setState({ user });
    }
    if (!localStorage.getItem(CONSTANTS.LOCAL_STORAGE_TOKEN_NAME)) {
      Router.push(ROUTES.DEFAULT);
    }
  }

  /**
   * Function to display the user name in header
   */
  getParaContent = () =>
    `Hi <span>${this.state.user.name || this.state.user.emailId}</span>`;

  render() {
    return (
      <header className={Styles.headerContainer}>
        <ParagraphComponent
          paraContent={this.getParaContent()}
          customClass={Styles.userName}
        />
      </header>
    );
  }
}

export default Header;
