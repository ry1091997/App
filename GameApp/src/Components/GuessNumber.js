import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const GuessNumber = props => {
  const [random, setRandomNumber] = useState(Math.floor(Math.random() * 10));
  const [logValue, setLogValue] = useState([random]);

  function IncreaseValue() {
    console.log("random value",random);
    let randomValue = random;
    randomValue < props.compareValue &&
      setRandomNumber(Math.floor(Math.random() * 10)+props.compareValue);
    randomValue < props.compareValue
      ? setLogValue(previousArray => [...previousArray, random])
      : randomValue == props.compareValue
      ? props.showResultPage(logValue.length)
      : alert("Don't lie!\n" + 'you Know that is wrong');
      
    //   random == props.compareValue && props.showResultPage();
    console.log("random value1",random);
  }
console.log("random array", logValue);
  function decreaseValue() {
    random > props.compareValue
      ? setLogValue(previousArray => [...previousArray, random])
      : random == props.compareValue
      ? props.showResultPage()
      : alert("Don't lie!\n" + 'you Know that is wrong');
    random > props.compareValue &&
      setRandomNumber(random-Math.floor(Math.random() * 10));
  }
console.log("logValue",logValue,"random",random);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000c0" />
      <Text style={styles.text}>Opponent's Guess</Text>
      <View style={styles.textNumSection}>
        <Text style={styles.textNum}>{random}</Text>
      </View>
      <View style={styles.verifyValue}>
        <Text style={styles.textNum1}>Higher Or lower?</Text>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button} onPress={decreaseValue}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={IncreaseValue}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.logSugestionContainer} showsVerticalScrollIndicator={false}>
        {logValue.map((item, index) => {
          return (
            <View key={index} style={styles.logSugestion}>
              <Text style={styles.logText}>#{index + 1}</Text>
              <Text style={styles.logText}>Opponent's Guess: {item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
    marginTop: 50,
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
  textNumSection: {
    marginTop: 20,
    width: '80%',
  },
  textNum: {
    color: 'white',
    fontSize: 30,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    padding: 40,
    paddingVertical: 30,
    borderRadius: 10,
    borderColor: '#fff',
  },
  verifyValue: {
    marginTop: 30,
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
  },
  textNum1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#fff',
  },
  buttonSection: {
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    // width:'30%',
    borderWidth: 1,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderColor: '#fff',
  },
  buttonText: {
    padding: 0,
    paddingHorizontal: 20,
    fontSize: 30,
    color: '#fff',
  },
  logSugestionContainer: {
    // flexDirection:'column-reverse',
    marginTop: 20,
    // width: '80%',
  },
  logSugestion: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 0,
    borderRadius: 10,
    borderColor: '#fff',
    marginBottom: 20,
  },
  logText: {
    padding: 0,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#fff',
  },
});

export default GuessNumber;
