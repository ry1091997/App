import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CategoryGridTitle from '../Components/CategoryGridTitle';
import {CATEGORIES} from '../data/dummy-data';


function CategoriesScreen({navigation}) {
    function pressHandler(itemId){
        navigation.navigate("MealsOverView",{categoryId:itemId});
    }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem => {
        return (
          <CategoryGridTitle
            title={renderItem.item.title}
            color={renderItem.item.color}
            onCustomPress = {pressHandler.bind(this,renderItem.item.id)}
          />
        );
      }}
      keyExtractor={item=>item.id}
      numColumns = {2}
    />
  );
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
