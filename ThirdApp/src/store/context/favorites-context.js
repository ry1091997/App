import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  //here createContext takes first value as a argument,we can pass it as a default 
  // javascript object. we do because it is helpfule in autocompletion
  ids: [],
  addFavorite: (id )=> {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}) {
  const [favoriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavouriteMealIds(currentItem => [...currentItem, id]);
  }

  function removeFavorite(id) {
    setFavouriteMealIds(currentItem =>  
      currentItem.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids:favoriteMealIds,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite,
  }

  return <FavoritesContext.Provider value = {value}>{children}</FavoritesContext.Provider>;
}



export default FavoritesContextProvider;
