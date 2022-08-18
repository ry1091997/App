import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SubTitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SubTitle;
