import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ExpenseItem from './ExpensesItem';

function ExpensesList({expenses}) {
  function renderExpensesItem(itemData) {
    return <ExpenseItem {...itemData.item} />
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({});

export default ExpensesList;
