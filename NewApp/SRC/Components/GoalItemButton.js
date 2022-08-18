import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.text}>
      <Text style={styles.insideText}>{props.text}</Text>
      <View style={styles.insideTextButton}>
        <Button
          title="Delete"
          onPress={() => props.deleteItem(props.index)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  insideText: {
    width: '80%',
  },
  insideTextButton: {
    paddingHorizontal: 0,
  },
  text: {
    // width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    paddingHorizontal: 20,
    color: '#000',
    backgroundColor: '#0cef',
    borderRadius: 10,
  },
});

export default GoalItem;
