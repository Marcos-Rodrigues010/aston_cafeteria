export const messageInitialState = {};

export const messageReducer = (state, action) => {
  switch (action.type){
    case 'ADD_MESSAGE':
      return { 
        ...state, 
        text: action.payload.text, 
        icon: action.payload.icon, 
        colorIcon: action.payload.colorIcon, 
        colorText: action.payload.colorText 
      }
      case 'REMOVE_MESSAGE':
      return {}
    }
  return state;
}