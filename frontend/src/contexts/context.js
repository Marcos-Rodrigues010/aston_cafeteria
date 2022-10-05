import React, {useReducer, createContext} from 'react';
import { userInitialState, userReducer } from '../reducers/userReducer';
import { showModalInitialState, showModalReducer } from '../reducers/showModalReducer';
import { favoritesInitialState, favoritesReducer } from '../reducers/favoritesReducer';
import { cartInitialState, cartReducer } from '../reducers/cartReducer';
import { messageInitialState, messageReducer } from '../reducers/messageReducer';

const initialState = {
    user: userInitialState,
    showModal: showModalInitialState,
    favorites: favoritesInitialState,
    cart: cartInitialState,
    message: messageInitialState
}

export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

const mainReducer = ({ user, showModal, favorites, cart, message }, action) => ({
    user: userReducer(user, action),
    showModal: showModalReducer(showModal, action),
    favorites: favoritesReducer(favorites, action),
    cart: cartReducer(cart, action),
    message: messageReducer(message, action)
})

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};