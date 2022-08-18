import React, {Component, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  StatusBar,
} from 'react-native';
// import Detail from './SRC/Components/Detail';
import Home from './SRC/Screens/Home';
import GoalItem from './SRC/Components/GoalItem';
import GoalInput from './SRC/Components/GoalInput';
// import Detail from './SRC/Components/Detail';
import SplashScreen from 'react-native-splash-screen'

function App() {
  const [goal, setGoal] = useState([]);
  const [isMOdalVisible, setModal] = useState(false);
  // changes for splash
  React.useEffect(() => {
    SplashScreen.hide();
  },[]);


  function addGoalInput(enteredGoal) {
    setGoal(previousarray => [...previousarray, enteredGoal]);
    startGoalInputHandler();
  }
  function deleteItem(givenIndex) {
    console.log(givenIndex);
    setGoal(previousarray => {
      return previousarray.filter((item, index) => {
        return index != givenIndex;
      });
    });
  }

  function startGoalInputHandler() {
    setModal(false);
  }

  function endGoalInputHandler() {
    setModal(!isMOdalVisible);
  }

  function Submit(event) {
    setGoal(previousarray => [
      ...previousarray,
      event.nativeEvent.text && event.nativeEvent.text,
    ]);
    startGoalInputHandler();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e085a" />
      <View style={styles.container}>
        <Button
          title="Goal"
          color="#0cef"
          onPress={() => setModal(true)}></Button>
        <GoalInput
          Submit={Submit}
          addGoalInput={addGoalInput}
          isMOdalVisible={isMOdalVisible}
          onCancel={endGoalInputHandler}
        />
        <View style={styles.textContainer}>
          <View style={styles.text}>
            <Text style={styles.textSize}>Your Goal</Text>
          </View>
          <FlatList
            data={goal}
            renderItem={item => {
              return (
                <GoalItem
                  text={item.item}
                  index={item.index}
                  deleteItem={deleteItem}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    // marginHorizontal: 20,
    backgroundColor: '#1e085a',
  },

  textContainer: {
    flex: 4,
    // flexDirection:'row'
  },
  text: {
    alignItems: 'center',
    padding: 20,
    margin: 8,
    paddingHorizontal: 20,
    color: '#000',
    backgroundColor: '#0cef',
    borderRadius: 10,
  },
  textSize:{
    fontSize:17,
    color:'#fff'
  }
});

export default App;
