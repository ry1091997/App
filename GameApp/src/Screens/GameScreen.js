import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert,Image,Text,FlatList} from 'react-native';
import GuessLogItems from '../Components/game/GuessLogItems';
import NumberContainer from '../Components/game/NumberContainer';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const rndum = Math.floor(Math.random() * (max - min) + min);
  if (rndum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndum;
  }
}

let maxBoundary = 100; 
let minBoundary = 1;
// we use both above variables  outside of the components 
// because we do not want to reset back to their initial values after EVERY EXCUTION (Re-renderd)
function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  // initialGuess is rendered before useEffect when we get final result therefore we use hardcoded
  // value not variable (minBoundary,maxBoundary) because it shows an error
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(()=>{
    maxBoundary = 100;
    minBoundary = 1;
  },[]) // it is used for updating maxBoundary and minBoundry to its initial value when 
  // this component renderd first time NOTE: we can also do in firs useEffect which is excuted 
  // when game is over

  
  
  
  // The dependency array basically tells the hook to "only trigger when the dependency array changes"
  //array has multiple elements in a dependency array, the hook will trigger if any element of the dependency array changes
  // if dependency array is empty then hook will only trigger once when the component is first rendered.
  function nextGuessContainer(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds]);
    
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={{marginBottom: 20}}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton check = {true} onPress={nextGuessContainer.bind(this, 'lower')}>
              <Image style = {styles.image} source ={require("../Assets/images/remove.png")} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton check = {true} onPress={nextGuessContainer.bind(this, 'greater')}>
            <Image style = {styles.image} source ={require("../Assets/images/add.png")} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listItem}>
        <FlatList data={guessRounds}  renderItem = {({item,index})=>{return <GuessLogItems key={index} roundNumber={guessRounds.length-index} guess = {item}/>}} />
        {/* {guessRounds.map((item,index)=><Text key = {index}>{item}</Text>)} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
  },
  image:{
    width:20,
    height:20,
    textAlign:'center',
  },
  listItem:{
    flex:1,
    padding:16,
  }
});

export default GameScreen;
