import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable, StyleSheet, Platform} from 'react-native';
import MealDetails from '../MealDetails';

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();
  // here we use useNavigation() because it is not part Of
  // navigation screen  we can also use it by passing a function
  // prop from "MealsOverView" to this component and excute it
  // after clicking on it

  function selectMealItemHandler() {
    navigation.navigate('MealDetailScreen', {id: id, title: title});
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : 'null')}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontweight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    margin: 8,
  },
});

export default MealItem;
