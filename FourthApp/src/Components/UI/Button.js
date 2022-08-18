import React from 'react';
import {Pressable, View,Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';

function Button({children, onPress, style,mode}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button,mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText,mode==='flat' && styles.flat]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    alignItems:'center'
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'left',
  },
  flatText:{
    color:GlobalStyles.colors.primary200
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius:4
  },
});

export default Button;
