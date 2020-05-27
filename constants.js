import ROUTES from './routes.constants';

const CONSTANTS = {
  APP_TITLE: 'Expense Tracker',
  LOCAL_STORAGE_TOKEN_NAME: 'token',
  USER_COOKIE: 'userData',
  NAVBAR: {
    MENU_DATA: [
      {
        link: ROUTES.HOME,
        title: 'Home'
      },
      {
        link: ROUTES.EXPENSES,
        title: 'Add Expenses'
      },
      {
        link: ROUTES.VIEW_EXPENSES,
        title: 'View Expenses'
      },
      { link: '', title: 'Logout', customClass: 'position-bottom' }
    ]
  },
  LOGIN_FORM: {
    FORM_HEADING: 'Please enter credentials',
    FORM_DATA: [
      {
        placeHolder: 'Enter Email',
        type: 'text',
        name: 'emailId',
        labelValue: 'Email'
      },
      {
        placeHolder: 'Enter Password',
        type: 'password',
        name: 'password',
        labelValue: 'Password'
      }
    ],
    AUTOCOMPLETE_VALUE: 'off',
    SIGN_IN_BUTTON_VALUE: 'Log in',
    SIGN_UP_TEXT: "Don't have an account?",
    SIGN_UP: 'Sign up'
  },
  SIGN_UP_FORM: {
    FORM_HEADING: 'Please enter your details',
    PASSWORD_ERROR: "Sorry the passwords don't match",
    FORM_DATA: [
      {
        placeHolder: 'Enter User Name',
        type: 'text',
        name: 'name',
        labelValue: 'User Name'
      },
      {
        placeHolder: 'Enter Email',
        type: 'text',
        name: 'emailId',
        labelValue: 'Email'
      },
      {
        placeHolder: 'Enter Password',
        type: 'password',
        name: 'password',
        labelValue: 'Password'
      },
      {
        placeHolder: 'Confirm Password',
        type: 'password',
        name: 'confirmPassword',
        labelValue: 'Confirm Password'
      }
    ],
    AUTOCOMPLETE_VALUE: 'off',
    SIGN_UP: 'Sign up',
    BACK: 'Back'
  },
  SUBMIT: 'Submit',
  LOGOUT: 'Logout',
  ADD_EXPENSE: {
    FORM_CONTENT: [
      {
        paraContent: 'Name of Expense',
        name: 'name',
        type: 'text',
        placeHolder: 'Enter Expense'
      },
      {
        paraContent: 'Amount Incurred',
        name: 'value',
        type: 'text',
        placeHolder: 'Enter Amount'
      }
    ],
    ADD_EXPENSE_ERROR: 'Please enter proper values'
  }
};
export default CONSTANTS;
