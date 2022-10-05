export const favoritesInitialState = [];

export const favoritesReducer = (state, action) => {
  switch (action.type){
    case 'ADD_FAVORITE':
      state.push(action.payload.favorite);
      return state;
    case 'REMOVE_FAVORITE':
      const index = state.findIndex(favorite => favorite.id === action.payload.idFavoriteRemove);
      state.splice(index, 1);
      return state;
    case 'UPDATE_FAVORITES':
      state = action.payload.favorites;
      return state;
  }
  return state;
}