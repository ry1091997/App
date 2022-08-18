import React from 'react';

import {View, Text, StyleSheet, Image,NativeModules, TouchableOpacity} from 'react-native';

function ResultPage(props){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over !</Text>
      <Image
        style={styles.successImage}
        source={require('../Assets/images/success.png')}
      />
      <Text style={styles.text1}>
        Your phone needed {props.roundValue} rounds to guess the number
      </Text>
      <TouchableOpacity style={styles.buttonSection} onPress={() => console.log("run")}><Text style={styles.restartButton}>Start New Game</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
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
    marginBottom: 30,
  },
  successImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    marginVertical: 30,
  },
  buttonSection:{
    borderWidth:1,
    borderColor:"#fff",
    padding:10,
    paddingHorizontal:20,
    borderRadius:10,
  },
  restartButton:{
    fontSize:20,
    color:'#fff'
  }
});

export default ResultPage;


// DevSettings.reload()

// NativeModules.DevSettings.reload()