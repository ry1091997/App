import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { GlobalStyles } from '../../Assets/constants/styles';
import {getFormattedDate} from '../../Utils.js/date';
import Button from '../UI/Button';
import Input from './Input';

function ExpensesForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    // here we get 'enteredValue' by default 
    setInput(currentValue => {
      return {
        ...currentValue,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
    //   Alert.alert('Invalid Input', 'Please Check your Input Values');
    setInput((curInputs)=>{
        return{
            amount:{value:curInputs.amount.value,isValid:amountIsValid,},
            date:{value:curInputs.date.value,isValid:dateIsValid,},
            description:{value:curInputs.description.value,isValid:descriptionIsValid,},
        }
    })
      return;
    }
    onSubmit(expenseData);
  }

  const formIsValid = !input.amount.isValid || !input.date.isValid || !input.description.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: input.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: input.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: input.description.value,
          // autoCapitalize:'none',
          // autoCorrect:false , //default is true
        }}
      />
      {formIsValid&&<Text style={styles.errorText}>Invalid Input Values- Please Check your entered data!</Text>}
      <View style={styles.button}>
        <Button style={styles.buttons} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.buttons} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowInput: {
    flex: 1,
  },
  errorText:{
    textAlign:'center',
    margin:8,
    color:GlobalStyles.colors.error500,
    fontSize:20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    minWidth: 80,
    marginHorizontal: 8,
  },
});

export default ExpensesForm;
