import React, {useContext, useLayoutEffect,useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {GlobalStyles} from '../Assets/constants/styles';
import ExpensesForm from '../Components/ManageExpenses/ExpensesForm';
import { ErrorOverLay } from '../Components/UI/ErrorOVerlay';
import IconButton from '../Components/UI/IconButton';
import { LoadingOverLay } from '../Components/UI/LoadingOverLay';
import {ExpensesContext} from '../store/expenses-context';
import {deleteExpense, storeExpense, updateExpense} from '../Utils/http';

function ManageExpenses({navigation, route}) {
  const expenseCtx = useContext(ExpensesContext);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [error,setError] = useState();

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

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
        await deleteExpense(editedExpenseId);
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    } catch (error) {
        setError('Could not delete expenses - please try again later!!!')
        setIsSubmitting(false) 
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
        // For Update
        if (isEditing) {
          expenseCtx.updateExpense(editedExpenseId, expenseData);
          await updateExpense(editedExpenseId,expenseData,)
          // for add
        } else {
          const id = await storeExpense(expenseData);
          expenseCtx.addExpense({...expenseData,id:id});
        }
        navigation.goBack();
        
    } catch (error) {
        setError("Could not save data - please try again later");
        setIsSubmitting(false);
    }
  }

  console.log(isSubmitting);

  function errorHandler(){
    setError(null);
  }

  if(setIsSubmitting && error){
    return <ErrorOverLay message={error} onConfirm={errorHandler} />
  }

  if(isSubmitting){
    return <LoadingOverLay />
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        defaultValues={selectedExpense}
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
