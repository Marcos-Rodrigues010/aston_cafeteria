import React, { useState, useEffect, useContext } from 'react';
import { Message } from './styled';

import { BsCheck2Circle } from 'react-icons/bs';
import { WiStars } from 'react-icons/wi';
import { BiError } from 'react-icons/bi';

import { Context } from '../../contexts/context';

const App = () => {

    const [heightWindow, setHeightWindow] = useState(0);
    const [ scrollPosition, setScrollPosition ] = useState(null);
    const [ display, setDisplay ] = useState('none');

    let idTimeOut = null;

    const { state, dispatch } = useContext(Context);

   useEffect(() => {
    showMessage();
   }, [state.message.text]);

   const showMessage = () => {
    if(state.message.text) {

        setHeightWindow(document.body.clientHeight);
        setScrollPosition(window.scrollY);
        setDisplay('flex');

        idTimeOut = setTimeout(() => {
            hideMessage();
        }, 3000);
    }
   }

   const hideMessage = () => {
    setDisplay('none');
    dispatch({
        type: 'REMOVE_MESSAGE'
    })
    clearTimeout(idTimeOut);
   }

   const getIcon = () => {
    switch (state.message.icon) {
        case 'BsCheck2Circle':
            return <BsCheck2Circle />;
        case 'WiStars':
            return <WiStars />
        case 'BiError':
            return <BiError />
    };
   };

   const handleToCloseMessage = (e) => {
    e.target.classList.contains('message__container') && setDisplay('none');
   }

    return (
        <Message display={display}
            height={heightWindow}
            colorIcon={state.message.colorIcon}
            colorText={state.message.colorText}
            scrollPosition={scrollPosition}>
            <div className='message__container' onClick={handleToCloseMessage}>
                <div className='message__area'>
                    <div className='message__icon'>{getIcon()}</div>
                    <div className='message__text'>{state.message.text}</div>
                </div>
            </div>
        </Message>
    );
};

export default App;