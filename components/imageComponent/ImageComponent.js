/**
 * Importing the dependencies
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import Styles from './imageComponent.module.scss';

/**
 * Defining the HeaderTitle component
 * @param {string} altText
 * @param {string} customClass
 */
const ImageComponent = ({ altText, customClass, ...props }) => {
  /**
   * Function to render the container class list for the component
   */
  const getCustomClassList = () => cx([Styles.imageComponent, customClass]);
  return <img className={getCustomClassList()} {...props} alt={altText} />;
};

/**
 * Defining the prop-types for the Image component
 */
ImageComponent.propTypes = {
  altText: PropTypes.string,
  customClass: PropTypes.string
};

/**
 * Declaring the default values of the props sent to the component
 */
ImageComponent.defaultProps = {
  altText: '',
  customClass: ''
};

export default ImageComponent;
