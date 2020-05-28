/**
 * Importing the dependencies
 */
import { Component } from 'react';
import CONSTANTS from '../../constants';
import Paragraph from '../paragraphComponent/ParagraphComponent';
import Input from '../inputBar/InputBar';
import Button from '../button/Button';
import ToastComponent from '../toastComponent/ToastComponent';
import API from '../../api.routes';
import { get as getCookie } from '../../utils/cookie';
import Styles from './addExpense.module.scss';

/**
 * Defining the add expense component
 * @extends Component
 */

class AddExpense extends Component {
  /**
   * Declare the initital state
   */
  state = {
    showError: false,
    showToast: false,
    resetInputState: false,
    toastMessage: ''
  };

  /**
   * Submit handler for login form
   */
  handleSubmit = e => {
    e.preventDefault();
  };

  /**
   * Function to handle the input change event
   * @param {string} value
   * @param {string} name
   */
  handleInputChange = (value, name) => {
    this.setState({ [name]: value }, () => {
      const { resetInputState } = this.state;
      if (resetInputState) {
        this.resetInput();
      }
    });
  };

  /**
   * Function to set the error message state
   * @param {boolean} errorMessageState
   */
  setShowError = errorMessageState => {
    this.setState({ showError: errorMessageState });
  };

  /**
   * Function to get the user id of the logged in user
   */
  getUserId = () => {
    const user = JSON.parse(getCookie(CONSTANTS.USER_COOKIE));
    return user.id;
  };

  /**
   * Function to display the success of add expense
   * @param {boolean} toastStatus
   * @param {string} message
   */
  setToast = (toastStatus, message = '') => {
    this.setState(
      {
        showToast: toastStatus,
        toastMessage: message
      },
      () => {
        const { toastMessage } = this.state;
        if (toastMessage === '') {
          this.resetInput(true);
        }
      }
    );
  };

  /**
   * Function to clear input value after successful API call
   * @param {boolean} resetState
   */
  resetInput = (resetState = false) => {
    this.setState({ resetInputState: resetState });
  };

  /**
   * Function to add expense to the system
   */
  addExpense = async () => {
    const { name, value } = this.state;
    if (Number(value)) {
      const res = await fetch(API.ADD_EXPENSE, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.getUserId(),
          expense: { name, value }
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem(
            CONSTANTS.LOCAL_STORAGE_TOKEN_NAME
          )
        }
      });
      const json = await res.json();
      this.setToast(true, json.message);
    } else {
      this.setShowError(true);
    }
  };

  /**
   * Function to get a list of all the name values of the form
   */
  getFormInputNames = () =>
    CONSTANTS.ADD_EXPENSE.FORM_CONTENT.map(formElem => formElem.name);

  /**
   * Function to check whether button is enabled or disabled
   */
  getDisabledStatus = () =>
    !this.getFormInputNames().every(
      elem => this.state && this.state[elem] && this.state[elem] !== ''
    );

  /**
   * Function to render the form contents
   */
  renderFormContent = () =>
    CONSTANTS.ADD_EXPENSE.FORM_CONTENT.map((formElem, index) => (
      <Input
        name={formElem.name}
        type={formElem.type}
        placeHolderText={formElem.placeHolder}
        handleChange={this.handleInputChange}
        labelValue={formElem.paraContent}
        resetInput={this.state.resetInputState}
        key={index}
      />
    ));

  /**
   * Function to render the error message for the component
   */
  renderErrorMessage = () => (
    <Paragraph
      paraContent={CONSTANTS.ADD_EXPENSE.ADD_EXPENSE_ERROR}
      customClass={Styles.errorMessage}
    />
  );

  render() {
    const { showError, showToast, toastMessage } = this.state;
    return (
      <div className={Styles.addExpenseContainer}>
        {showError && this.renderErrorMessage()}
        <h2 className={Styles.addExpenseHeader}>Add an Expense</h2>
        <div className={Styles.addExpenseContainerSection}>
          <form
            onSubmit={this.handleSubmit}
            autoComplete={CONSTANTS.LOGIN_FORM.AUTOCOMPLETE_VALUE}
          >
            {this.renderFormContent()}
          </form>
        </div>
        <Button
          value={CONSTANTS.SUBMIT}
          customClass={Styles.addExpenseBtn}
          disabled={this.getDisabledStatus()}
          onClick={this.addExpense}
        />
        {showToast && (
          <ToastComponent
            toastMessage={toastMessage}
            onAnimationEndhandler={() => {
              this.setToast(false);
            }}
          />
        )}
      </div>
    );
  }
}

export default AddExpense;
