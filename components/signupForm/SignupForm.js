/**
 * Importing the dependencies
 */
import { Component } from 'react';
import Link from 'next/link';
import CONSTANTS from '../../constants';
import ROUTES from '../../routes.constants';
import InputBar from '../inputBar/InputBar';
import ImageComponent from '../imageComponent/ImageComponent';
import HeadingComponent from '../headingComponent/HeadingComponent';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import Button from '../button/Button';
import Styles from '../loginForm/loginForm.module.scss';
import appIcon from '../../assets/images/appIconWhite.svg';

/**
 * Defining the login form
 * @extends Component
 */
class LoginForm extends Component {
  /**
   * Submit handler for login form
   */
  handleSubmit = e => {
    e.preventDefault();
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
   * Function to check whether button is enabled or disabled
   */
  getDisabledStatus = () => true;

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
    return (
      <div className={Styles.loginFormContainer}>
        <div className={Styles.leftSection}>
          <ImageComponent src={appIcon} alt="app" />
          <HeadingComponent
            title={CONSTANTS.APP_TITLE}
            customClass={Styles.headingText}
          />
        </div>
        <div className={Styles.rightSection}>
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
            <Link href={ROUTES.HOME}>
              <a href={ROUTES.HOME} className={Styles.signUpText}>
                {CONSTANTS.SIGN_UP_FORM.BACK}
              </a>
            </Link>
            <Button
              customClass={Styles.loginButton}
              value={CONSTANTS.SIGN_UP_FORM.SIGN_UP}
              disabled={this.getDisabledStatus()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
