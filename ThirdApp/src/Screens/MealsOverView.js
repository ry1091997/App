import React, {useLayoutEffect} from 'react';
import MealsList from '../Components/MealsList/MealsList';
import {CATEGORIES, MEALS} from '../data/dummy-data';

function MealsOverView({route, navigation}) {
  // const route  = useRoute()
  // it is a alternative way of
  // using route with importing here we do not use route as a props
  // we use it when component is nested and is not registerd as
  // a screen Component

  const catId = route.params.categoryId;

  const displayName = MEALS.filter(mealItem => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.find(item => catId == item.id).title;
    navigation.setOptions({title: title});
  }, [catId, navigation]);

  return <MealsList items={displayName} />;
}

export default MealsOverView;
