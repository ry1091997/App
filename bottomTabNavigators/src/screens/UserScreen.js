import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({navigation,route}) {

  function openbottomTabHandler(){
    navigation.navigate("Welcome");
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={openbottomTabHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
