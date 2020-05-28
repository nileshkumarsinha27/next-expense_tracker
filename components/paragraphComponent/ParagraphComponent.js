/**
 * Importing the dependencies
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Styles from './paragraphComponent.module.scss';

/**
 * Defining the HeaderTitle component
 * @param {any} paraContent
 * @param {string} customClass
 */
const ParagraphComponent = ({ paraContent, customClass, ...props }) => {
  /**
   * Function to render the container class list for the component
   */
  const getCustomClassList = () => cx([Styles.paragraphTitle, customClass]);
  return (
    <p className={getCustomClassList()} {...props}>
      {ReactHtmlParser(paraContent)}
    </p>
  );
};

/**
 * Defining the prop-types for the Paragraph component
 */
ParagraphComponent.propTypes = {
  paraContent: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.node
  ]),
  customClass: PropTypes.string
};

/**
 * Declaring the default values of the props sent to the component
 */
ParagraphComponent.defaultProps = {
  paraContent: '',
  customClass: ''
};

export default ParagraphComponent;
