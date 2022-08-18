import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Text,
  Image,
} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  return (
    <Modal visible={props.isMOdalVisible} animationType="slide">
      <View style={styles.inputTextContainer}>
        <Image
          style={styles.imageCss}
          source={require('../Assets/images/goal.png')}
          // source={require('/some/path/image.png')}
        />
        <TextInput
          style={styles.textField}
          placeholder="Your Goal"
          value={enteredGoal}
          placeholderTextColor="#000"
          onChangeText={goalInputHandler}
          onSubmitEditing={event => {
            enteredGoal && props.Submit(event);
            enteredGoal && setEnteredGoal('');
          }}
        />
        <View style={styles.buttonSection}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              onPress={() => {
                enteredGoal && props.addGoalInput(enteredGoal);
                enteredGoal && setEnteredGoal('');
              }}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    // paddingBottom: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textField: {
    width: '100%',
    color: '#120438',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 120,
    margin: 5,
  },
  text: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 20,
    margin: 8,
    paddingHorizontal: 20,
    color: '#000',
    backgroundColor: '#0cef',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textSize:{
    fontSize:20,
    color:'#fff'
  },
  imageCss: {
    width: 100,
    height: 100,
    margin: 10,
    // backgroundColor:'red',
    borderRadius: 50,
  },
});
