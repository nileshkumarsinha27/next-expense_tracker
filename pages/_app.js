/**
 * Importing the global stylesheets
 */
import PropTypes from 'prop-types';
import '../style/main.scss';

/**
 * Custom App component to override the default App component to enable usage of global style sheets
 * @param {node} Component
 * @param {object} pageProps
 */
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

/**
 * Declaring the prop-types for the MyApp component
 */
MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType])
    .isRequired,
  pageProps: PropTypes.object
};

/**
 * Defining the default values of the props sent to the MyApp component
 */
MyApp.defaultProps = {
  pageProps: {}
};

export default MyApp;
