/**
 * Importing the dependencies
 */
import { Component, Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Styles from './inputBar.module.scss';

class InputBar extends Component {
  state = {
    inputVal: ''
  };

  /**
   * Defining the life cycle methods
   */

  componentDidUpdate(prevProps) {
    if (
      prevProps.resetInput !== this.props.resetInput &&
      this.props.resetInput
    ) {
      this.handleInputChange();
    }
  }

  /**
   * Function to render the container class list for the component
   */
  getContainerClass = () => cx([Styles.labelContainer, this.props.customClass]);

  /**
   * Function the handle the change event for the input component
   */
  handleInputChange = (value = '') => {
    this.setState(
      {
        inputVal: value
      },
      () => {
        const { handleChange, name } = this.props;
        const { inputVal } = this.state;
        handleChange(inputVal, name);
      }
    );
  };

  render() {
    const { placeHolderText, labelValue, name, type } = this.props;
    const { inputVal } = this.state;
    return (
      <Fragment>
        <label className={this.getContainerClass()} htmlFor={name}>
          {labelValue}
        </label>
        <input
          placeholder={placeHolderText}
          onChange={({ target: { value } }) => {
            this.handleInputChange(value);
          }}
          value={inputVal}
          id={name}
          name={name}
          className={Styles.inputComponent}
          type={type}
        />
      </Fragment>
    );
  }
}

/**
 * Declaring the props of the component
 */
InputBar.propTypes = {
  customClass: PropTypes.string,
  placeHolderText: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  labelValue: PropTypes.string,
  type: PropTypes.string,
  resetInput: PropTypes.bool
};

/**
 * Defining the default values of the props
 */
InputBar.defaultProps = {
  customClass: '',
  placeHolderText: '',
  handleChange: () => {},
  name: '',
  type: 'text',
  labelValue: '',
  resetInput: false
};

export default InputBar;
