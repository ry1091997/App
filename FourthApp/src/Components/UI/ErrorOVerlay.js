import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';
import Button from './Button';

export function ErrorOverLay({message,onConfirm}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error Occured!!!!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} > Okay!</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color:'#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
