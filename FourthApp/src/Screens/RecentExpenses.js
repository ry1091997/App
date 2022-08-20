import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../Components/Expenses/ExpensesOutput';
import { ErrorOverLay } from '../Components/UI/ErrorOVerlay';
import {LoadingOverLay} from '../Components/UI/LoadingOverLay';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../Utils/date';
import {fetchExpenses} from '../Utils/http';

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error,setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
          const expenses = await fetchExpenses();
          expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!!!');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);


  function errorHandler(){
    setError(null);
  }

  if(!isFetching && error){
    return <ErrorOverLay message = {error} onConfirm = {errorHandler} />
  }

  if (isFetching) {
    return <LoadingOverLay />;
  }

  //   here we store last 7 days expenses
  const recentExpenses = expensesCtx.expenses.filter(expenses => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expenses.date > date7daysAgo && expenses.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriodName="Last 7 days"
      fallBack="No expenses register for last 7 days"
    />
  );
}

export default RecentExpenses;
