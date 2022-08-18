import React from 'react';
import {View, Button, Text, StyleSheet, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    
      <View style={styles.text}>
        <Pressable style = {({pressed})=>pressed && styles.pressedItem} android_ripple={{color:"#210644"}} onPress={() => props.deleteItem(props.index)}>
        <Text style={styles.insideText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  insideText: {
    flex:1,
    // width: '100%',
    fontSize:17,
    color:'#fff',
  },
  insideTextButton: {
    paddingHorizontal: 0,
    
  },
  text: {
    width:'100%',
    padding: 10,
    margin: 8,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#0cef',
    borderRadius: 10,
    alignItems:'center'
  },
  pressedItem:{
    opacity:0.5,
  }
});
export default GoalItem;
