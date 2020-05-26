/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import CONSTANTS from '../../constants';
import ROUTES from '../../routes.constants';
import InputBar from '../inputBar/InputBar';
import ImageComponent from '../imageComponent/ImageComponent';
import HeadingComponent from '../headingComponent/HeadingComponent';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import HeadComponent from '../head/Head';
import Button from '../button/Button';
import API from '../../api.routes';
import Styles from './loginForm.module.scss';
import appIcon from '../../assets/images/appIconWhite.svg';

/**
 * Defining the login form
 * @extends Component
 */
class LoginForm extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.redirectToHome();
    }
  }

  /**
   * Function to push the route to the index route of the application
   */
  redirectToHome = () => Router.push(ROUTES.HOME);

  /**
   * Submit handler for login form
   */
  handleSubmit = e => {
    e.preventDefault();
  };

  /**
   * Click handler for login form
   */

  handleLoginClick = async () => {
    const res = await fetch(API.LOGIN, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    });
    const json = await res.json();
    if (json.success) {
      localStorage.setItem('token', json.token);
      this.redirectToHome();
    }
  };

  /**
   * Function to handle the input field data
   * @param {string} value
   * @param {string} name
   */
  changeHandler = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  /**
   * Function to get a list of all the name values of the form
   */
  getFormInputNames = () =>
    CONSTANTS.LOGIN_FORM.FORM_DATA.map(formElem => formElem.name);

  /**
   * Function to check whether button is enabled or disabled
   */
  getDisabledStatus = () =>
    !this.getFormInputNames().every(
      elem => this.state && this.state[elem] && this.state[elem] !== ''
    );

  /**
   * Function to render the form Elements
   */
  renderFormElements = () =>
    CONSTANTS.LOGIN_FORM.FORM_DATA.map((formElem, index) => (
      <InputBar
        name={formElem.name}
        key={index}
        type={formElem.type}
        placeHolderText={formElem.placeHolder}
        labelValue={formElem.labelValue}
        handleChange={this.changeHandler}
      />
    ));

  render() {
    return (
      <div className={Styles.loginFormContainer}>
        <HeadComponent />
        <div className={Styles.leftSection}>
          <ImageComponent src={appIcon} alt="app" />
          <HeadingComponent
            title={CONSTANTS.APP_TITLE}
            customClass={Styles.headingText}
          />
        </div>
        <div className={Styles.rightSection}>
          <ParagraphComponent paraContent={CONSTANTS.LOGIN_FORM.FORM_HEADING} />
          <form
            className={Styles.loginForm}
            onSubmit={this.handleSubmit}
            autoComplete={CONSTANTS.LOGIN_FORM.AUTOCOMPLETE_VALUE}
          >
            {this.renderFormElements()}
            <Button
              customClass={Styles.loginButton}
              value={CONSTANTS.LOGIN_FORM.SIGN_IN_BUTTON_VALUE}
              disabled={this.getDisabledStatus()}
              onClick={this.handleLoginClick}
            />
          </form>
          <div className={Styles.signupSection}>
            <ParagraphComponent
              paraContent={CONSTANTS.LOGIN_FORM.SIGN_UP_TEXT}
              customClass={Styles.signupText}
            />
            <Link href={ROUTES.SIGN_UP}>
              <a href={ROUTES.SIGN_UP} className={Styles.signUpText}>
                {CONSTANTS.LOGIN_FORM.SIGN_UP}
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
