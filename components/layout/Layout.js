/**
 * Importing the dependencies
 */
import Head from 'next/head';
import Header from '../header/Header';
import Styles from './layout.module.scss';

/**
 *Layout component to be used throughout the application
 * @param {object} props
 */
const Layout = ({ children, ...props }) => (
  <div className={Styles.layoutContainer} {...props}>
    <Head>
      <title>Expense Tracker</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main className="main-container">
      <Header />
      {children}
    </main>
  </div>
);

export default Layout;
