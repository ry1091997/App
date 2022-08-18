import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealsList from '../Components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/context/favorites-context';

function FavoritesScreen({route}) {
  const favoriteItemId = useContext(FavoritesContext);
  let items = MEALS.filter(item => favoriteItemId.ids.includes(item.id));
  if (items.length > 0) {
    return <MealsList items={items} />;
  } else {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>
          YOu have no <Text style={styles.subtTitle}>Favorite Meals</Text> yet
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  subtTitle: {
    color: '#3ecba1',
  },
});

export default FavoritesScreen;
