import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';

function ExpensesSummary({expenses, periodName}) {
  const expenseSum = expenses.reduce((sum, expense) => {
    // here sum = 0 if we give second param as 0 
    // its values depends on second params
    // here "expenses" represents element of expenses array
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
