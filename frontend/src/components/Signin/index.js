import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { Signin } from './styled';
import SectionTitle from '../SectionTitle';
import utils from '../../utils/utils';

import { Context } from '../../contexts/context';
import { api } from '../../api';

const App = () => {

    const [heightWindow, setHeightWindow] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch } = useContext(Context);
    
    const navigate = useNavigate();

    useEffect(() => {
         setHeightWindow(document.body.clientHeight);
    }, []);

    const closeModal = (e) => {
        e.target.id === 'modal' && dispatch({
            type: 'CHANGE_SHOW_MODAL',
            payload: {
                display: 'none'
            }
        });
    };

    const signin = async () => {

        if (!utils.isValidString(email) || !utils.isValidString(password)) {
            return dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Preencha todos os campos para continuar',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            })
        };

        const payload = {
            email, password
        };
        const user = await api.signin(payload);
        setEmail('');
        setPassword('');
        if (user && user.id) {
            const favorites = await api.getFavoritesByUserId(user.id);
            const cart = await api.getCartByUserId(user.id);
            dispatch({
                type: 'CHANGE_USER',
                payload: {
                    name: user.name,
                    id: user.id
                }
            });
            dispatch({
                type: 'CHANGE_SHOW_MODAL',
                payload: {
                    display: 'none'
                }
            })
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: `Bem vindo ${state.user.name}(a)!`,
                    icon: 'WiStars',
                    colorIcon: '#FFC700',
                    colorText: '#DEC057'
                }
            })
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }
            });
            dispatch({
                type: 'UPDATE_CART',
                payload: {
                    cart
                }
            })
            navigate('/');
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Email e/ou senha incorretos',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            })
        }
    };

    const handleToKeyDown = (e) => {
        e.keyCode === 13 && signin();
    }

    return(
        <Signin id="modal" display={state.showModal.display} height={heightWindow} onClick={closeModal}>
            <div className='signin__area'>
                <SectionTitle title="Entrar" colorBar="#C4C4C4" width="150"/>
                <div className='signin__inputs'>
                    <div className='signin__inputs-block'>
                        <label className="signin__label-input" htmlFor='email'>Email:</label>
                        <input className="signin__input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='email'/>
                    </div>
                    <div className='signin__inputs-block'>
                        <label className="signin__label-input" htmlFor='password'>Senha:</label>
                        <input 
                        className="signin__input" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleToKeyDown}
                        type="password" name="password" 
                        placeholder='senha'/>
                    </div>
                    <div className='signin__button-area'>
                        <button className='signin__button' onClick={signin}>Entrar</button>
                    </div>
                </div>
            </div>
        </Signin>
    );
};

export default App;