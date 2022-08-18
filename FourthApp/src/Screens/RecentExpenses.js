import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../Components/Expenses/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../Utils.js/date';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(expenses => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expenses.date > date7daysAgo && expenses.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriodName="Last 7 days"
      fallBack='No expenses register for last 7 days'
    />
  );
}

export default RecentExpenses;
