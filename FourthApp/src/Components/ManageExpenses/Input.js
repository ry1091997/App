import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Assets/constants/styles';

function Input({label,invalid, textInputConfig,style}) {
  const input = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    input.push(styles.inputMultiline);
  }
  invalid&&input.push(styles.invalidInput)
  return (
    <View style={[styles.inputContainer,style]}>
      <Text  style={[styles.label,invalid&&styles.invalidLabel]}>{label}</Text>
      <TextInput style={input} {...textInputConfig} />
    </View>
  );
}


const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel:{
    color:GlobalStyles.colors.error500
  },
  invalidInput:{
    backgroundColor:GlobalStyles.colors.error50,
  }
});

export default Input;
