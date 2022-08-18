import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../Constants/color';
import Family from '../../Constants/fontFamily';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../Assets/images/success.png')}
        />
      </View>
      <Text style = {styles.summaryText}> 
        Your Phone Needed <Text style = {styles.highlight}>{roundsNumber}</Text> rounds to guess the number
        <Text style = {styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText:{
    fontFamily:Family.sansRegular,
    fontSize:24,
    textAlign:'center',
    marginBottom:24,
  },
  highlight:{
    fontFamily:Family.sansBold,
    color:Colors.primary500,
  }
});

export default GameOverScreen;
