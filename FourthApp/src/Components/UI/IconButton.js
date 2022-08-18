import React from 'react';
import {View, Pressable,Image, StyleSheet} from 'react-native';

function IconButton({icon, onPress,width,height}) {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed})=> pressed&&styles.pressed}>
        <View style={styles.buttonContainer}>
          <Image source={icon}  style={{width:width,height:height}}/>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed:{
        opacity:0.75
    }
})

export default IconButton;
