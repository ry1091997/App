// import { useNavigation } from "@react-navigation/native";
import React, {useContext, useLayoutEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import IconButton from '../Components/IconButton';
import MealDetails from '../Components/MealDetails';
import List from '../Components/MealDetails/List';
import SubTitle from '../Components/MealDetails/Subtitle';
import {MEALS} from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({route, navigation}) {

  const favoritesMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.id;
  const displayMealDetails = MEALS.find(item => mealId === item.id);
  const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId);
  // console.log(favoritesMealsCtx.ids.includes(mealId));

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite){
      favoritesMealsCtx.removeFavorite(mealId);
    }else{
      favoritesMealsCtx.addFavorite(mealId);
    }

  }

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return (
            <IconButton
              onPress={changeFavoriteStatusHandler}
              imageToggle={ mealIsFavorite}
            />
          );
        },
      },
      [
        navigation,
        changeFavoriteStatusHandler,
      ],
    );
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: displayMealDetails.imageUrl}} />
      <Text style={styles.title}> {displayMealDetails.title} </Text>

      <View>
        <MealDetails
          duration={displayMealDetails.duration}
          complexity={displayMealDetails.complexity}
          affordability={displayMealDetails.affordability}
          textStyle={styles.detailText}
        />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List ListItem={displayMealDetails.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List ListItem={displayMealDetails.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});

export default MealDetailScreen;
