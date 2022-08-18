import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        }}
        style={{
          height: 100,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text style={styles.textColor}>
        வணக்கம் உலகம் வணக்கம் உலகம் வணக்கம் உலகம் வணக்கம் உலகம்
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    // padding:10,
    margin: 10,
  },
  textColor: {
    color: '#000',
    padding: 10,
    // flex:1
  },
});
