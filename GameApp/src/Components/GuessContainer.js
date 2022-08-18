import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function GuessContainer(props) {
  const [inputText, setInput] = useState('');
  const [storeInput, setStoreInput] = useState('');
//   const [renderingValue,setRenderingValue] = useState(false)

  function InputHandler(text) {
    setInput(text);
  }

  function resetText() {
    setInput('');
  }

  function storeTextValue() {
    1 <= parseInt(inputText) && parseInt(inputText) < 100
      ? setStoreInput(parseInt(inputText))
      : alert('number must be in between 1 and 99');
      1 <= parseInt(inputText) && parseInt(inputText) < 100 ? props.hideShow(parseInt(inputText)) : null
    setInput('');
    // alert("Hello World")
  }
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.text}>Guess My Number </Text>
      </View>
      <View style={styles.guessSection}>
        <View style={styles.guessSectionContainer}>
          <Text style={styles.guessSectionText}>Enter a Number</Text>
          <TextInput
            style={styles.guessSectionInput}
            textAlign="center"
            value={inputText}
            onChangeText={InputHandler}
            keyboardType="numeric"
            // maxLength={2}
          />
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button} onPress={resetText}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={storeTextValue}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: 'white',
    fontSize: 30,
    // lineHeight: 50,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 10,
    borderColor: '#fff',
  },
  insideImage: {
    flex: 1,
    backgroundColor: '#000000c0',
  },
  textSection: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    alignItems: 'center',
  },
  guessSection: {
    flex: 3,
    padding: 20,
  },
  guessSectionContainer: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 12,
    borderColor: '#fff',
  },
  guessSectionText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  guessSectionInput: {
    width: '15%',
    margin: 10,
    fontSize: 25,
    borderBottomWidth: 1,
    paddingVertical: 10,
    color: '#fff',
    borderColor: '#fff',
  },
  buttonSection: {
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    // width:'30%',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: '#fff',
  },
  buttonText: {
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#fff',
  },
});

export default GuessContainer;
