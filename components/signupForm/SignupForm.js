/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import CONSTANTS from '../../constants';
import ROUTES from '../../routes.constants';
import InputBar from '../inputBar/InputBar';
import HeadComponent from '../head/Head';
import ImageComponent from '../imageComponent/ImageComponent';
import HeadingComponent from '../headingComponent/HeadingComponent';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import Button from '../button/Button';
import Styles from '../loginForm/loginForm.module.scss';
import appIcon from '../../assets/images/appIconWhite.svg';
import { set as setCookies } from '../../utils/cookie';
import API from '../../api.routes';

/**
 * Defining the login form
 * @extends Component
 */
class LoginForm extends Component {
  /**
   * Defining the initial state
   */
  state = {
    showError: false
  };

  /**
   * Submit handler for login form
   */
  handleSubmit = e => {
    e.preventDefault();
  };

  /**
   * Function to push the route to the index route of the application
   */
  redirectToHome = () => Router.push(ROUTES.HOME);

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
   * Function to change the state of the displaying error message
   * @param {boolean} messageState
   */
  showErrorMessage = (messageState = false) => {
    this.setState({ showError: messageState });
  };

  /**
   * Function to handle the sign up button click
   */
  handleSignUpClick = async () => {
    const { name, emailId, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.showErrorMessage(true);
    } else {
      const res = await fetch(API.SIGN_UP, {
        method: 'POST',
        body: JSON.stringify({ name, emailId, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const json = await res.json();
      if (json.success) {
        localStorage.setItem(CONSTANTS.LOCAL_STORAGE_TOKEN_NAME, json.token);
        setCookies(
          CONSTANTS.USER_COOKIE,
          JSON.stringify(json.user),
          json.cookieExpiryTime
        );
        this.redirectToHome();
      }
    }
  };

  /**
   * Function to get a list of all the name values of the form
   */
  getFormInputNames = () =>
    CONSTANTS.SIGN_UP_FORM.FORM_DATA.map(formElem => formElem.name);

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
    CONSTANTS.SIGN_UP_FORM.FORM_DATA.map((formElem, index) => (
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
    const { showError } = this.state;
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
          {showError && (
            <ParagraphComponent
              paraContent={CONSTANTS.SIGN_UP_FORM.PASSWORD_ERROR}
              customClass={Styles.errorMessage}
            />
          )}
          <ParagraphComponent
            paraContent={CONSTANTS.SIGN_UP_FORM.FORM_HEADING}
          />
          <form
            className={Styles.loginForm}
            onSubmit={this.handleSubmit}
            autoComplete={CONSTANTS.SIGN_UP_FORM.AUTOCOMPLETE_VALUE}
          >
            {this.renderFormElements()}
          </form>
          <div className={Styles.signupButtonSection}>
            <Link href={ROUTES.DEFAULT}>
              <a href={ROUTES.DEFAULT} className={Styles.signUpText}>
                {CONSTANTS.SIGN_UP_FORM.BACK}
              </a>
            </Link>
            <Button
              customClass={Styles.loginButton}
              value={CONSTANTS.SIGN_UP_FORM.SIGN_UP}
              disabled={this.getDisabledStatus()}
              onClick={this.handleSignUpClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
