import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';

function renderMealItem(itemData) {
  const item = itemData.item;

  const mealItemProps = {
    id: item.id,
    imageUrl: item.imageUrl,
    title: item.title,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };
  return <MealItem {...mealItemProps} />;
}

function MealsList({items}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default MealsList;
