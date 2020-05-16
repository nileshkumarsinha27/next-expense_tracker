/**
 * Importing the dependencies
 */
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * Defining the button component
 * @param {string} size
 * @param {string} customClass
 * @param {string} href
 * @param {string} value
 */
const Button = ({ size = 'medium', customClass, href, value, ...props }) => {
  /**
   * Function to determine the container class of the component
   */
  const classes = cx([
    `variant-${props.type}`,
    `size-${size}`,
    `${customClass}`
  ]);

  return href ? (
    <div>
      <a className={classes} href={href} {...props}>
        {value}
      </a>
    </div>
  ) : (
    <button
      type={props.type}
      className={`${classes} button`}
      {...props}
      value={value}
    >
      {value}
    </button>
  );
};

/**
 * Declaring the prop types for the button component
 */
Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  customClass: PropTypes.string,
  href: PropTypes.string,
  value: PropTypes.string.isRequired
};

/**
 * Defining the default values of the props
 */
Button.defaultProps = {
  type: 'default',
  customClass: '',
  href: '',
  size: 'medium'
};
export default Button;
