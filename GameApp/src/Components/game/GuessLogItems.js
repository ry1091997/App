import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../Constants/color';
import Family from '../../../Constants/fontFamily';

function GuessLogItems({roundNumber,guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary800,
        borderWidth: 1,
        borderRadius:40,
        marginVertical:8,
        // marginTop:20,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        padding:12,
        justifyContent: 'space-between',
        width:'100%',
        elevation:4, //only for android
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius: 3,
    },
    itemText:{
        fontFamily:Family.sansRegular,
    }
})

export default GuessLogItems;
