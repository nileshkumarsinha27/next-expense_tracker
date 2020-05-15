/**
 * Importing the dependencies
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import Styles from './headingComponent.module.scss';

/**
 * Defining the HeaderTitle component
 * @param {string} title
 * @param {string} customClass
 */
const HeadingComponent = ({ title, customClass, ...props }) => {
  /**
   * Function to render the container class list for the component
   */
  const getCustomClassList = () => cx([Styles.headerTitle, customClass]);
  return (
    <h1 className={getCustomClassList()} {...props}>
      {title}
    </h1>
  );
};

/**
 * Defining the prop-types for the Heading component
 */
HeadingComponent.propTypes = {
  title: PropTypes.string,
  customClass: PropTypes.string
};

/**
 * Declaring the default values of the props sent to the component
 */
HeadingComponent.defaultProps = {
  title: '',
  customClass: ''
};

export default HeadingComponent;
