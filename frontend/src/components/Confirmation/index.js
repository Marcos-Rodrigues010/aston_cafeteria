import React, { useState, useContext, useRef, useEffect } from 'react';
import { Confirmation } from './styled';
import utils from '../../utils/utils';


import { BiError } from 'react-icons/bi';

const App = (props) => {

    const confirmation = useRef();
    const containerMessage = useRef();

    const [ heightWindow, setHeightWindow ] = useState(0);
    const [ scrollPosition,  setScrollPosition] = useState(0);

    useEffect(() => {
        setHeightWindow(document.body.clientHeight);
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        handleToChangeShowConfirmation();
        setHeightWindow(document.body.clientHeight);
        setScrollPosition(window.scrollY);
    }, [props.showConfirmation]);

    const handleToChangeShowConfirmation = () => {
        if (props.showConfirmation) {
            confirmation.current.style.animation = 'fade 0.3s';
            containerMessage.current.style.animation = 'fade 0.5s';
            confirmation.current.style.display = 'flex';
        } else {
            confirmation.current.style.animation = 'fadeOut 0.3s';
            const idTimeOut = setTimeout(() => {
                closeConfirmation(idTimeOut);
            }, 200);
        };
    }

    const closeConfirmation = (idTimeOut) => {
        confirmation.current.style.display = 'none';
        clearTimeout(idTimeOut);
    };

    return (
        <Confirmation ref={confirmation} scrollPosition={scrollPosition} height={heightWindow}>
            <div ref={containerMessage} className='confirmation__container'>
                <div className='confirmation__icon'><BiError /></div>
                <div className='confirmation__message'>{props.textConfirmation}</div>
                <div className='confirmation__butons'>
                    <div className='btnCancelar' onClick={props.cancelAction}>Cancelar</div>
                    <div className='btnConfirmar' onClick={props.confirmAction}>Confirmar</div>
                </div>
            </div>
        </Confirmation>
    );
    
};

export default App;