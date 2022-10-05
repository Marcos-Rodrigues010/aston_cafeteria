export const userInitialState = {
  name: '',
  id: null
}

export const userReducer = (state, action) => {
  switch (action.type){
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name }
    case 'CHANGE_AGE':
      return { ...state, id: action.payload.id }
    case 'CHANGE_USER':
      return { name: action.payload.name, id: action.payload.id }
  }
  return state;
}