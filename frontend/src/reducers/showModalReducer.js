export const showModalInitialState = {
  display: 'none'
}

export const showModalReducer = (state, action) => {
  switch (action.type){
    case 'CHANGE_SHOW_MODAL':
      return { display: action.payload.display }
  }
  return state;
}