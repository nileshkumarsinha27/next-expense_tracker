/**
 * Importing the dependencies
 */
import PropTypes from 'prop-types';
import Header from '../header/Header';
import SideNav from '../sideNav/SideNav';
import HeadComponent from '../head/Head';
import Styles from './layout.module.scss';
import CONSTANTS from '../../constants';

/**
 *Layout component to be used throughout the application
 * @param {node} children
 * @param {object} props
 */
const Layout = ({ children, ...props }) => (
  <div className={Styles.layoutContainer} {...props}>
    <HeadComponent />
    <main className="main-container">
      <Header />
      <SideNav navMenuData={CONSTANTS.NAVBAR.MENU_DATA} />
      {children}
    </main>
  </div>
);

/**
 * Declaring the prop types for Layout component
 */
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType])
};

/**
 * Defining the default values of the props
 */
Layout.defaultProps = {
  children: <div />
};

export default Layout;
