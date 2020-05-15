/**
 * Importing the dependencies
 */
import HeadingComponent from '../headingComponent/HeadingComponent';
import ImageComponent from '../imageComponent/ImageComponent';
import appIcon from '../../assets/images/appIcon.svg';
import Styles from './header.module.scss';

const Header = () => (
  <header className={Styles.headerContainer}>
    <ImageComponent
      src={appIcon}
      altText="app"
      customClass={Styles.headerImage}
    />
    <HeadingComponent
      title="Exprense Tracker"
      customClass={Styles.headingText}
    />
  </header>
);

export default Header;
