import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import Family from '../../../Constants/fontFamily';

function Title({children}) {
  return (
      <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        fontFamily:Family.sansBold,
        fontSize:24,
        textAlign:'center',
        color:'white',
        borderWidth:2,
        borderColor:'white',
        padding:12,
    }
})


export default Title;