import ROUTES from './routes.constants';

const CONSTANTS = {
  APP_TITLE: 'Expense Tracker',
  NAVBAR: {
    MENU_DATA: [
      {
        link: ROUTES.HOME,
        title: 'Home'
      },
      {
        link: ROUTES.EXPENSES,
        title: 'Expenses'
      }
    ]
  },
  LOGIN_FORM: {
    FORM_HEADING: 'Please enter credentials',
    FORM_DATA: [
      {
        placeHolder: 'Enter User Name',
        type: 'text',
        name: 'userName',
        labelValue: 'User Name'
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
    FORM_DATA: [
      {
        placeHolder: 'Enter User Name',
        type: 'text',
        name: 'userName',
        labelValue: 'User Name'
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
        name: 'comfirmPassword',
        labelValue: 'Confirm Password'
      }
    ],
    AUTOCOMPLETE_VALUE: 'off',
    SIGN_UP: 'Sign up',
    BACK: 'Back'
  }
};
export default CONSTANTS;
