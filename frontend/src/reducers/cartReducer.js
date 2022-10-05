export const cartInitialState = [];

export const cartReducer = (state, action) => {
  switch (action.type){
    case 'ADD_TO_CART':
      state.push(action.payload.product);
      return state;
    case 'REMOVE_FROM_CART':
      const index = state.findIndex(product => product.id === action.payload.idProductRemove);
      state.splice(index, 1);
      return state;
    case 'UPDATE_CART':
      state = action.payload.cart
      return state;
  }
  return state;
}