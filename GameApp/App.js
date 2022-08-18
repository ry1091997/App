import React, {useState} from 'react';
import {
  View,
  // Text,
  StyleSheet,
  // StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import GuessContainer from './src/Components/GuessContainer';
import GuessNumber from './src/Components/GuessNumber';
import ResultPage from './src/Components/ResultPage';
import StartGameScreen from './src/Screens/StartGameScreen';
import GameScreen from './src/Screens/GameScreen';
import GameOverScreen from './src/Screens/GameOverScreen'
import LinearGradient from 'react-native-linear-gradient';
import Colors from './Constants/color';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(round){
    setGameIsOver(true);
    setGuessRounds(round);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    // setGameIsOver(true); not required becaue we already do in gameOverHandler
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPicknumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber = {userNumber} onGameOver = {gameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber = {userNumber} onStartNewGame = {startNewGameHandler}/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./src/Assets/images/background.png')}
        resizeMode="cover"
        imageStyle={styles.backGroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});

export default App;

// const [renderingValue, setRenderingValue] = useState(false);
// const [givenValue, setGivenValue] = useState();
// const [resultPage, setResultPage] = useState(true);
// const [roundValue, setRoundValue] = useState('');

// function hideShow(check) {
//   setRenderingValue(true);
//   setGivenValue(check);
// }

// function showResultPage(data) {
//   setRoundValue(data);
//   setResultPage(!resultPage);
// }

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="white" barStyle={'dark-content'} />
//       <ImageBackground
//         source={require('./src/Assets/background.png')}
//         style={styles.image}>
//         <View style={styles.insideImage}>
//           {renderingValue?resultPage?<GuessNumber compareValue = {givenValue} showResultPage = {showResultPage} />:<ResultPage roundValue={roundValue}/>:<GuessContainer hideShow = {hideShow}/>}
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#000000c0',
//     // padding:30
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 30,
//     // lineHeight: 50,
//     padding: 8,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     width: '80%',
//     borderRadius: 10,
//     borderColor: '#fff',
//   },
//   insideImage: {
//     flex: 1,
//     backgroundColor: '#000000c0',
//   },
//   textSection: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     padding: 10,
//     alignItems: 'center',
//   },
//   guessSection: {
//     flex: 3,
//     padding: 20,
//   },
//   guessSectionContainer: {
//     borderWidth: 1,
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 12,
//     borderColor: '#fff',
//   },
//   guessSectionText: {
//     fontSize: 30,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   guessSectionInput: {
//     width: '15%',
//     margin: 10,
//     fontSize: 25,
//     borderBottomWidth: 1,
//     paddingVertical: 10,
//     color: '#fff',
//     borderColor: '#fff',
//   },
//   buttonSection: {
//     width: '100%',
//     // flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 10,
//   },
//   button: {
//     // width:'30%',
//     borderWidth: 1,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     borderColor: '#fff',
//   },
//   buttonText: {
//     padding: 5,
//     paddingHorizontal: 20,
//     fontSize: 20,
//     color: '#fff',
//   },
// });

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
