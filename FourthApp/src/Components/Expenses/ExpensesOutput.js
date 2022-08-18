import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({expenses, expensesPeriodName, fallBack}) {
  let content = <Text style={styles.infoText}>{fallBack}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriodName} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
});

export default ExpensesOutput;
