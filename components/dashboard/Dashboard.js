/**
 * Importing the dependencies
 */
import Router from 'next/router';
import ImageComponent from '../imageComponent/ImageComponent';
import ParagraphComponent from '../paragraphComponent/ParagraphComponent';
import Button from '../button/Button';
import CONSTANTS from '../../constants';
import ROUTES from '../../routes.constants';
import appIcon from '../../assets/images/appIcon.svg';
import Styles from './dashboard.module.scss';

/**
 * Defining the dashboard component
 */
const Dashboard = () => {
  /**
   * Function to handle start recording button click
   */
  const handleRecordClick = () => {
    Router.push(ROUTES.EXPENSES);
  };
  return (
    <div className={Styles.dashboardContainer}>
      <ImageComponent
        src={appIcon}
        alt="app"
        customClass={Styles.dashboardImage}
      />
      <ParagraphComponent
        paraContent={CONSTANTS.DASHBOARD.TITLE}
        customClass={Styles.dashboardTitle}
      />
      <ParagraphComponent
        paraContent={CONSTANTS.DASHBOARD.SUB_TITLE}
        customClass={Styles.dashboardSubtitle}
      />
      <Button
        value={CONSTANTS.DASHBOARD.RECORD}
        onClick={handleRecordClick}
        customClass={Styles.dashboardBtn}
      />
    </div>
  );
};
export default Dashboard;
