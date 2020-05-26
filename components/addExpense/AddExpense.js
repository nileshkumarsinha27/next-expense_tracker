import { Fragment } from 'react';
import CONSTANTS from '../../constants';
import Paragraph from '../paragraphComponent/ParagraphComponent';
import Input from '../inputBar/InputBar';
import Button from '../button/Button';

import Styles from './addExpense.module.scss';

const AddExpense = () => (
  <Fragment>
    <h2 className={Styles.addExpenseHeader}>Add an Expense</h2>
    <div className={Styles.addExpenseContainer}>
      <Paragraph paraContent="Name of Expense" />
      <Input />
    </div>
    <div className={Styles.addExpenseContainer}>
      <Paragraph paraContent="Amount Incurred" />
      <Input />
    </div>
    <Button value={CONSTANTS.SUBMIT} customClass={Styles.addExpenseBtn} />
  </Fragment>
);

export default AddExpense;
