/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';
import cx from 'classnames';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import Styles from './toastComponent.module.scss';

/**
 * Defining the toast component
 * @param {string} toastMessage
 * @param {string} customClass
 * @param {function (params) {}} onAnimationEndhandler
 */
const ToastComponent = ({
  toastMessage,
  customClass,
  onAnimationEndhandler,
  ...props
}) => {
  /**
   * Function to get the class list of the container
   */
  const getContainerClassName = () => cx([Styles.toastContainer, customClass]);
  return (
    <div
      className={getContainerClassName()}
      onAnimationEnd={onAnimationEndhandler}
      {...props}
    >
      <ParagraphComponent paraContent={toastMessage} />
    </div>
  );
};

/**
 * Defining the prop types for the component
 */
ToastComponent.propTypes = {
  toastMessage: PropTypes.string,
  customClass: PropTypes.string,
  onAnimationEndhandler: PropTypes.func
};

/**
 * Defining the default values of the props
 */
ToastComponent.defaultProps = {
  toastMessage: '',
  customClass: '',
  onAnimationEndhandler: () => {}
};

export default ToastComponent;
