import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {GlobalStyles} from '../Assets/constants/styles';
import ExpensesForm from '../Components/ManageExpenses/ExpensesForm';
import Button from '../Components/UI/Button';
import IconButton from '../Components/UI/IconButton';
import {ExpensesContext} from '../store/expenses-context';

function ManageExpenses({navigation, route}) {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  // '!!' for converting value into boolean

  const selectedExpense = expenseCtx.expenses.find(
    item => item.id === editedExpenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: isEditing ? 'Edit Expense' : 'Add Expense',
      },
      [navigation, isEditing],
    );
  });

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    // For Update
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
      // for add
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        defaultValues = {selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={require('../Assets/Images/delete.png')}
            width={50}
            height={50}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

export default ManageExpenses;
