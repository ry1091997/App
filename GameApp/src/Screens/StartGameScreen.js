import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Alert, Text} from 'react-native';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Colors from '../../Constants/color';
import Title from '../Components/ui/Title';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';

function StartGameScreen({onPicknumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmINputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay!', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onPicknumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler} children={'Reset'} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmINputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  
  numberInput: {
    width: 50,
    height: 60,
    fontSize: 32,
    // padding:10,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
