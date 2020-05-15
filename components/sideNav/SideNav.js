/**
 * Importing the dependencies
 */
import Link from 'next/link';
import cx from 'classnames';
import PropTypes from 'prop-types';
import HeadingComponent from '../headingComponent/HeadingComponent';
import ImageComponent from '../imageComponent/ImageComponent';
import appIcon from '../../assets/images/appIcon.svg';
import Styles from './sideNav.module.scss';

/**
 * Defining the navigation bar
 * @param {string} customClass
 * @param {array} navMenuData
 */
const SideNav = ({ customClass, navMenuData, ...props }) => {
  /**
   * Function to render the container class list for the component
   */
  const getContainerClass = () => cx([Styles.sideNavContainer, customClass]);
  /**
   * Function to render the nav menu list items
   */
  const renderNavListItem = () =>
    navMenuData.map((navMenuItem, index) => (
      <Link href={navMenuItem.link} key={index}>
        <li>
          <a href={navMenuItem.link}>{navMenuItem.title} </a>
        </li>
      </Link>
    ));
  return (
    <nav className={getContainerClass()} {...props}>
      <div className={Styles.titleContainer}>
        <ImageComponent
          src={appIcon}
          altText="app"
          customClass={Styles.headerImage}
        />
        <HeadingComponent
          title="Expense Tracker"
          customClass={Styles.headingText}
        />
      </div>
      <ul className={Styles.navList}>{renderNavListItem()}</ul>
    </nav>
  );
};

/**
 * Declaring the prop types for the component
 */
SideNav.propTypes = {
  customClass: PropTypes.string,
  navMenuData: PropTypes.array.isRequired
};

/**
 * Defining the default values for the props
 */
SideNav.defaultProps = {
  customClass: ''
};

export default SideNav;
