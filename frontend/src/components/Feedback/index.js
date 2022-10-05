import React, { useState, useContext } from 'react';
import { Feedback } from './styled';
import utils from '../../utils/utils';

import { Context } from '../../contexts/context';


const App = () => {


    const { state, dispatch } = useContext(Context);
    const [ name, setName ] = useState('');
    const [ feedback, setFeedback ] = useState('');

    const sendFeedback = () => {
        if (utils.isValidString(feedback) && state.user.id) {
            dispatch({
                type:   'ADD_MESSAGE',
                payload: {
                    text: 'Seu feedback foi enviado! Obrigado!',
                    icon: 'BsCheck2Circle',
                    colorIcon: '#0F68BF',
                    colorText: '#4DA2F5'
                }
            });
        } else if (!utils.isValidString(feedback) && state.user.id) {
            dispatch({
                type:   'ADD_MESSAGE',
                payload: {
                    text: 'Adicione um elegio, crítica ou sugestão.',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            });
        } else if (!state.user.id) {
            dispatch({
                type:   'ADD_MESSAGE',
                payload: {
                    text: 'Você precisa estar logado para enviar um feedback.',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            });
        }
        setName('');
        setFeedback('');
    };
    return (
        <Feedback>
            <div className='feedback__title'>Deixe-nos um feedback</div>
            <input 
                className='feedback__input-name'
                type='text' placeholder='seu nome' 
                value={name} 
                onChange={e => setName(e.target.value)}/>
            <textarea className='feedback__input-text'
                value={feedback} 
                onChange={e => setFeedback(e.target.value)} 
                placeholder='sugestões, críticas e elogios...'></textarea>
            <div className='feedback__btn' onClick={sendFeedback}>Enviar</div>
        </Feedback>
    );
    
};

export default App;