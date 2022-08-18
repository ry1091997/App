import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Detail from '../Components/Detail';
// import Detail from '../Components/Detail'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Detail />
        <Detail />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Detail />
        <Detail />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Detail />
        <Detail />
      </View>
      {/* <Detail /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
